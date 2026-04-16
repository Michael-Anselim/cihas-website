<?php

namespace App;

enum PostCategories: string
{
    case GENERAL = 'general';
    case ACADEMIC = 'academic';
    case ADMISSION = 'admission';
    case SPORTS = 'sports';
    case DOWNLOADS = 'downloads';
    case ANNOUNCEMENTS = 'announcements';
}
