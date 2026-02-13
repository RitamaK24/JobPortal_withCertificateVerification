const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const certificateSchema = new mongoose.Schema({
    certificateId: { type: String, required: true, unique: true },
    studentName: { type: String, required: true },
    internshipDomain: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    issuedDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

const Certificate = mongoose.model('Certificate', certificateSchema);

async function seedTestCertificates() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing certificates
        await Certificate.deleteMany({});
        console.log('🗑️  Cleared existing certificates');

        // Test certificates
        const testCerts = [
            {
                certificateId: 'CERT001',
                studentName: 'Bhaskar Bind',
                internshipDomain: 'Web Development',
                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-03-31'),
                issuedDate: new Date('2024-04-01')
            },
            {
                certificateId: 'CERT002',
                studentName: 'Sakshi Argade',
                internshipDomain: 'Frontend Development',
                startDate: new Date('2024-02-01'),
                endDate: new Date('2024-04-30'),
                issuedDate: new Date('2024-05-01')
            },
            {
                certificateId: 'CERT003',
                studentName: 'Ritama Kundu',
                internshipDomain: 'UI/UX Design',
                startDate: new Date('2024-01-15'),
                endDate: new Date('2024-03-15'),
                issuedDate: new Date('2024-03-20')
            },
            {
                certificateId: 'CERT004',
                studentName: 'Happy Jangir',
                internshipDomain: 'Backend Development',
                startDate: new Date('2024-02-15'),
                endDate: new Date('2024-05-15'),
                issuedDate: new Date('2024-05-20')
            },
            {
                certificateId: 'TEST123',
                studentName: 'Test Student',
                internshipDomain: 'Full Stack Development',
                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-06-30'),
                issuedDate: new Date('2024-07-01')
            }
        ];

        await Certificate.insertMany(testCerts);
        console.log(`✅ Added ${testCerts.length} test certificates`);

        console.log('\n📋 Test Certificate IDs:');
        testCerts.forEach(cert => {
            console.log(`   - ${cert.certificateId} (${cert.studentName})`);
        });

        console.log('\n✅ Seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

seedTestCertificates();
