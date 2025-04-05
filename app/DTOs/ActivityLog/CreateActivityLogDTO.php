<?php

namespace App\DTOs\ActivityLog;

class CreateActivityLogDTO
{
    public function __construct(
        public readonly string $event,
        public readonly string $model_type,
        public readonly int $model_id,
        public readonly string $action,
        public readonly string $description,
        public readonly ?array $old_values = null,
        public readonly ?array $new_values = null,
        public readonly ?int $user_id = null,
        public readonly ?string $ip_address = null,
        public readonly ?string $user_agent = null,
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            event: $data['event'],
            model_type: $data['model_type'],
            model_id: $data['model_id'],
            action: $data['action'],
            description: $data['description'],
            old_values: $data['old_values'] ?? null,
            new_values: $data['new_values'] ?? null,
            user_id: $data['user_id'] ?? null,
            ip_address: $data['ip_address'] ?? null,
            user_agent: $data['user_agent'] ?? null,
        );
    }

    public function toArray(): array
    {
        return array_filter([
            'event' => $this->event,
            'model_type' => $this->model_type,
            'model_id' => $this->model_id,
            'action' => $this->action,
            'description' => $this->description,
            'old_values' => $this->old_values,
            'new_values' => $this->new_values,
            'user_id' => $this->user_id,
            'ip_address' => $this->ip_address,
            'user_agent' => $this->user_agent,
        ], fn($value) => !is_null($value));
    }
}
