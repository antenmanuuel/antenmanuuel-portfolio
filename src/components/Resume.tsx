import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    // Using a sample resume PDF from Adobe
    const pdfUrl = "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf";
    window.open(pdfUrl, "_blank");
    setIsLoading(false);
  };

  return (
    <section className="section-padding bg-white min-h-screen pt-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Resume</h2>
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf#view=FitH"
              className="w-full h-[800px]"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;