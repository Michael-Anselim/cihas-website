<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('programs')->insert([
            [
                'name' => 'Ordinary diploma in Clinical medicine',
                'type' => 'long_course',
                'department_id' => 3,
                'description' => 'Our Ordinary Diploma in Clinical Medicine provides a comprehensive foundation for a
                                career as a Clinical Officer. The curriculum integrates core biomedical sciences with practical clinical
                                training in diagnosis, treatment, and patient management. This ensures graduates have a solid
                                understanding of disease processes and the skills needed for effective medical practice. A key feature
                                of the program is its extensive hands-on clinical exposure. Students train in real healthcare settings,
                                learning ',
                'requirements' => 'Holders of Certificate of Secondary Education Examination (CSEE)
                                with at least four (4) passes in non-religious subjects including
                                Chemistry, Biology and Physics/Engineering Sciences. A pass in Basic
                                Mathematics and English Language is an added advantag',
                'image' => '/storage/programs/2KQXeDUdVwhv6e5rRNw56VAvYIOd82qZuMQGPuDO.jpg"',
                'levels' => 'IV to VI',
                'status' => 'active',
            ],
        ]);
        DB::table('programs')->insert([
            [
                'name' => 'Ordinary diploma in nursing and midwifery',
                'type' => 'long_course',
                'department_id' => 2,
                'description' => 'We offer the complete NACTVET-accredited pathway in Nursing and Midwifery, from Level
                                4 to Level 6. This structured progression equips students with the comprehensive theoretical knowledge
                                and extensive clinical practice required to become a fully qualified and competent Nurse or Midwife',
                'requirements' => 'olders of Certificate of Secondary Education Examination (CSEE)
                                with at least four (4) passes in non-religious subjects including
                                Chemistry, Biology and Physics/Engineering Sciences. A pass in Basic
                                Mathematics and English Language is an added advantage.',
                'image' => '/storage/programs/2KQXeDUdVwhv6e5rRNw56VAvYIOd82qZuMQGPuDO.jpg"',
                'levels' => 'IV to VI',
                'status' => 'active',
            ],
        ]);
        DB::table('programs')->insert([
            [
                'name' => 'Ordinary diploma in Social work',
                'type' => 'long_course',
                'department_id' => 4,
                'description' => 'The Ordinary Diploma in Social Work, offered by institutions like CIHAS, prepares
                                individuals for careers in social services. The program covers key areas such as social policy, human
                                behavior, community development, and counseling, equipping students with the skills to support
                                individuals and communities in need.',
                'requirements' => 'Holders of Certificate of Secondary Education Examination (CSEE)
                                with At Least four (4) Passes in non-religious Subjects OR
                                Holders of Basic Technician Certificate (NTA Level 4) in Social Work,
                                Gender, Community Development, Youth Work or Advanced
                                Certificate of Secondary Education Examination (ACSEE) with At
                                Least one Principal Pass and one Subsidiary in Principal Subjects
                                ',
                'image' => '/storage/programs/2KQXeDUdVwhv6e5rRNw56VAvYIOd82qZuMQGPuDO.jpg"',
                'levels' => 'IV to VI',
                'status' => 'active',
            ],
        ]);

        DB::table('programs')->insert([
            [
                'name' => 'Basic computer applications',
                'type' => 'long_course',
                'department_id' => 1,
                'description' => 'We offer two types of computer courses. Our long-term TVET programs (Levels I-III)
                provide full certification in programming or design for career starters. Our short 4-6 week courses
                offer focused, practical skills in programming, graphic design, or basic computer use for quick
                upskilling. Both tracks are hands-on and designed to build real-world competency.',
                'requirements' => 'At least a standard seven certificate',
                'image' => '/storage/programs/2KQXeDUdVwhv6e5rRNw56VAvYIOd82qZuMQGPuDO.jpg"',
                'levels' => 'I to III',
                'status' => 'active',
            ],
        ]);
    }
}
