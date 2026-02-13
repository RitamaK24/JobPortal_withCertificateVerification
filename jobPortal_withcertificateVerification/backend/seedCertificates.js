const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Certificate = require('./models/Certificate');
require('dotenv').config();

// Connect to database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Connected');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

// Sample data
const sampleAdmin = {
    name: 'System Administrator',
    email: 'admin@certificate.com',
    password: 'admin123',
    role: 'admin'
};

const sampleStudent = {
    name: 'John Student',
    email: 'student@certificate.com',
    password: 'student123',
    role: 'student'
};

const sampleCertificates = [
    {
        certificateId: 'CERT001',
        studentName: 'John Doe',
        internshipDomain: 'Web Development',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-03-15')
    },
    {
        certificateId: 'CERT002',
        studentName: 'Jane Smith',
        internshipDomain: 'Data Science',
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-04-01')
    },
    {
        certificateId: 'CERT003',
        studentName: 'Mike Johnson',
        internshipDomain: 'Mobile App Development',
        startDate: new Date('2024-01-20'),
        endDate: new Date('2024-03-20')
    },
    {
        certificateId: 'CERT004',
        studentName: 'Sarah Wilson',
        internshipDomain: 'UI/UX Design',
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-05-01')
    },
    {
        certificateId: 'CERT005',
        studentName: 'David Brown',
        internshipDomain: 'Digital Marketing',
        startDate: new Date('2024-02-15'),
        endDate: new Date('2024-04-15')
    }
];

// Seed function
const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        console.log('🧹 Clearing existing data...');
        await User.deleteMany({});
        await Certificate.deleteMany({});

        // Create admin user
        console.log('👤 Creating admin user...');
        const admin = await User.create(sampleAdmin);
        console.log(`✅ Admin created: ${admin.email}`);

        // Create student user
        console.log('👤 Creating student user...');
        const student = await User.create(sampleStudent);
        console.log(`✅ Student created: ${student.email}`);

        // Create certificates
        console.log('📜 Creating sample certificates...');
        const certificates = await Certificate.insertMany(sampleCertificates);
        console.log(`✅ ${certificates.length} certificates created`);

        console.log('\\n🎉 Sample data seeded successfully!');
        console.log('\\n📋 Login Credentials:');
        console.log('Admin: admin@certificate.com / admin123');
        console.log('Student: student@certificate.com / student123');
        console.log('\\n📜 Sample Certificate IDs:');
        certificates.forEach(cert => {
            console.log(`${cert.certificateId} - ${cert.studentName} (${cert.internshipDomain})`);
        });

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

// Run seeder
seedData();