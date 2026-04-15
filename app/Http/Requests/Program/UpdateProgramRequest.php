<?php

namespace App\Http\Requests\Program;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProgramRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255', Rule::unique('programs', 'name')->ignore($this->program)],
            'type' => ['required', 'string', Rule::in(['short-course', 'long_course'])],
            'levels' => ['required', 'string', Rule::in(['I to III', 'IV to VI'])],
            'description' => ['required', 'string', 'max:255'],
            'requirements' => ['required', 'string', 'max:255'],
            'department_id' => ['required', 'exists:departments,id'],
            'status' => ['required', Rule::in(['active', 'inactive'])],

        ];
    }
}
