
// Mammoth is loaded via CDN in index.html
declare const mammoth: any;

export async function extractTextFromDocx(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      try {
        const result = await mammoth.extractRawText({ arrayBuffer });
        resolve(result.value);
      } catch (err) {
        reject(new Error('Failed to parse .docx file.'));
      }
    };
    reader.onerror = () => reject(new Error('File reading error.'));
    reader.readAsArrayBuffer(file);
  });
}
