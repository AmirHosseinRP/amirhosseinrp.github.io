import { useState } from "react";

const NEXT_PUBLIC_CLOUDCONVERT_API_KEY = "key";
const GOOGLE_DOC_EXPORT_LINK =
  "https://docs.google.com/document/d/1SCPlkQIdBQgIF76709OR2x7J0dYK9Wzf/export?format=docx";

export default function DownloadAndConvertGoogleDoc() {
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    setLoading(true);

    try {
      // 1. Download the Google Doc as Word (docx)
      const docxBlob = await fetch(GOOGLE_DOC_EXPORT_LINK).then(res => res.blob());
      const docxFile = new File([docxBlob], "google-doc.docx", {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      // 2. Create CloudConvert Job
      const jobRes = await fetch("https://api.cloudconvert.com/v2/jobs", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NEXT_PUBLIC_CLOUDCONVERT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tasks: {
            import_file: {
              operation: "import/upload",
            },
            convert_file: {
              operation: "convert",
              input: "import_file",
              input_format: "docx",
              output_format: "pdf",
            },
            export_file: {
              operation: "export/url",
              input: "convert_file",
              inline: false,
              archive_multiple_files: false,
            },
          },
        }),
      });

      const job = await jobRes.json();
      const uploadTask = job.data.tasks.find((t: { name: string }) => t.name === "import_file");
      const uploadUrl = uploadTask.result.form.url;
      const formFields = uploadTask.result.form.parameters;

      // 3. Upload the docx to CloudConvert
      const formData = new FormData();
      Object.entries(formFields).forEach(([key, val]) => formData.append(key, val as string));
      formData.append("file", docxFile);

      await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      // 4. Poll for completion
      const jobId = job.data.id;
      let pdfUrl = "";
      for (let i = 0; i < 20; i++) {
        const statusRes = await fetch(`https://api.cloudconvert.com/v2/jobs/${jobId}`, {
          headers: { Authorization: `Bearer ${NEXT_PUBLIC_CLOUDCONVERT_API_KEY}` },
        });
        const statusData = await statusRes.json();

        const exportTask = statusData.data.tasks.find(
          (t: { name: string; status: string }) => t.name === "export_file" && t.status === "finished"
        );

        if (exportTask) {
          pdfUrl = exportTask.result.files[0].url;
          break;
        }

        await new Promise(res => setTimeout(res, 1500)); // wait and retry
      }

      if (!pdfUrl) throw new Error("Conversion failed or timed out");

      // 5. Download PDF
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = "converted-google-doc.pdf";
      a.click();
    } catch {
      alert("An error occurred during conversion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Convert Google Doc to PDF</h2>
      <p className="mb-4 text-sm text-gray-600">Converts a public Google Doc directly into a downloadable PDF.</p>
      <button
        disabled={loading}
        onClick={handleConvert}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Converting..." : "Convert Now"}
      </button>
    </div>
  );
}
