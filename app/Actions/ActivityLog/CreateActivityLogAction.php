<?php

namespace App\Actions\ActivityLog;

use App\DTOs\ActivityLog\CreateActivityLogDTO;
use App\Models\ActivityLog;
use App\Repositories\ActivityLogRepository;

class CreateActivityLogAction
{
    public function __construct(
        protected ActivityLogRepository $repository
    ) {}

    public function execute(CreateActivityLogDTO $dto): ActivityLog
    {
        return $this->repository->create($dto->toArray());
    }
}
