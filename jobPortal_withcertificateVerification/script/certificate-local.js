// Local Certificate System (without backend)
const CERTIFICATES_KEY = 'certificates_data';

// Sample certificate data for testing
const sampleCertificates = [
    {
        certificateId: 'CERT001',
        studentName: 'John Doe',
        internshipDomain: 'Web Development',
        startDate: '2024-01-15',
        endDate: '2024-03-15',
        issuedDate: '2024-03-20'
    },
    {
        certificateId: 'CERT002',
        studentName: 'Jane Smith',
        internshipDomain: 'Data Science',
        startDate: '2024-02-01',
        endDate: '2024-04-01',
        issuedDate: '2024-04-05'
    },
    {
        certificateId: 'CERT003',
        studentName: 'Mike Johnson',
        internshipDomain: 'Mobile App Development',
        startDate: '2024-01-20',
        endDate: '2024-03-20',
        issuedDate: '2024-03-25'
    }
];

// Initialize sample data if not exists
function initializeSampleData() {
    if (!localStorage.getItem(CERTIFICATES_KEY)) {
        localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(sampleCertificates));
    }
}

// Get all certificates
function getAllCertificates() {
    const data = localStorage.getItem(CERTIFICATES_KEY);
    return data ? JSON.parse(data) : [];
}

// Search certificate by ID
function searchCertificateById(certificateId) {
    const certificates = getAllCertificates();
    return certificates.find(cert => cert.certificateId.toLowerCase() === certificateId.toLowerCase());
}

// Add new certificates (for admin upload simulation)
function addCertificates(newCertificates) {
    const existing = getAllCertificates();
    const updated = [...existing, ...newCertificates];
    localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(updated));
    return updated;
}

// Generate PDF (simplified version)
function generateCertificatePDF(certificate) {
    // Create a simple HTML content for PDF
    const htmlContent = `
        <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
            <h1 style="font-size: 36px; margin-bottom: 30px;">CERTIFICATE OF COMPLETION</h1>
            <p style="font-size: 18px; margin: 20px 0;">This is to certify that</p>
            <h2 style="font-size: 28px; color: #667eea; margin: 20px 0;">${certificate.studentName}</h2>
            <p style="font-size: 18px; margin: 20px 0;">has successfully completed the internship in</p>
            <h3 style="font-size: 24px; color: #764ba2; margin: 20px 0;">${certificate.internshipDomain}</h3>
            <p style="font-size: 16px; margin: 30px 0;">Duration: ${new Date(certificate.startDate).toLocaleDateString()} to ${new Date(certificate.endDate).toLocaleDateString()}</p>
            <p style="font-size: 14px; margin: 10px 0;">Certificate ID: ${certificate.certificateId}</p>
            <p style="font-size: 14px; margin: 10px 0;">Issued on: ${new Date(certificate.issuedDate).toLocaleDateString()}</p>
        </div>
    `;
    
    // Open in new window for printing/saving
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Certificate - ${certificate.certificateId}</title>
                <style>
                    body { margin: 0; padding: 20px; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                ${htmlContent}
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();
});