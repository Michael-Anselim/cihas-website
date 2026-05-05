<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('departments')->insert([
            'name' => 'Information Communication Technology',
            'code' => 'ICT',
            'status' => 'active',
        ]);
        DB::table('departments')->insert([
            'name' => 'Nursing and Midwifery',
            'code' => 'NMT',
            'status' => 'active',
        ]);
        DB::table('departments')->insert([
            'name' => 'Clinical Medicine',
            'code' => 'CMT',
            'status' => 'active',
        ]);

        DB::table('departments')->insert([
            'name' => 'Social work',
            'code' => 'SW',
            'status' => 'active',
        ]);
    }
}
