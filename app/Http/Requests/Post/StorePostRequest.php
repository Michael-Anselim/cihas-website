<?php

namespace App\Http\Requests\Post;

use App\PostCategories;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'department_id' => ['required', 'exists:departments,id'],
            'title' => ['required', 'string', 'max:255'],
            'date' => ['required', 'date', 'after_or_equal:today'],
            'image' => ['required', 'image', 'mimes:png,jpg', 'max:1028'],
            'description' => ['required', 'string', 'max:255'],
            'attachment' => ['nullable', 'file', 'mimes:pdf', 'max:5120'],
            'category' => ['required', Rule::in(PostCategories::cases())],
        ];
    }
}
