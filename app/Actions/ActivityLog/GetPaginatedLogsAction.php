<?php

namespace App\Actions\ActivityLog;

use App\Repositories\ActivityLogRepository;

class GetPaginatedLogsAction
{
    public function __construct(
        protected ActivityLogRepository $repository
    ) {}

    public function execute(
        $filters,
        $page,
        $limit,
        $query,
        $sortBy,
        $sortOrder
    ): array {
        return $this->repository->getPaginatedLogs(
            $filters,
            $page,
            $limit,
            $query,
            $sortBy,
            $sortOrder
        );
    }
}
