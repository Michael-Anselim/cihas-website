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
                'name' => 'Ordinary diploma in Computer Science',
                'type' => 'long_course',
                'department_id' => 1,
                'description' => 'Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Magni quaerat quisquam
                                  alias excepturi soluta aut optio consequatu.',
                'requirements' => 'dolor sit amet consectetur
                                    adipisicing elit. Magni
                                    quaerat quisquam',
                'image' => '/storage/programs/2KQXeDUdVwhv6e5rRNw56VAvYIOd82qZuMQGPuDO.jpg"',
                'levels' => 'I to III',
                'status' => 'active',
            ],
        ]);
        DB::table('programs')->insert([
            [
                'name' => 'Ordinary diploma in Social work',
                'type' => 'long_course',
                'department_id' => 2,
                'description' => 'Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni quaerat quisquam
                alias excepturi soluta aut optio consequatu.',
                'requirements' => 'dolor sit amet consectetur
                adipisicing elit. Magni
                quaerat quisquam',
                'image' => '/storage/programs/2KQXeDUdVwhv6e5rRNw56VAvYIOd82qZuMQGPuDO.jpg"',
                'levels' => 'I to III',
                'status' => 'active',
            ],
        ]);
        DB::table('programs')->insert([
            [
                'name' => 'Ordinary diploma in Business Administration',
                'type' => 'long_course',
                'department_id' => 3,
                'description' => 'Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni quaerat quisquam
                alias excepturi soluta aut optio consequatu.',
                'requirements' => 'dolor sit amet consectetur
                adipisicing elit. Magni
                quaerat quisquam',
                'image' => '/storage/programs/2KQXeDUdVwhv6e5rRNw56VAvYIOd82qZuMQGPuDO.jpg"',
                'levels' => 'I to III',
                'status' => 'active',
            ],
        ]);
    }
}
