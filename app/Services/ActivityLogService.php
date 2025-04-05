<?php

namespace App\Services;

use App\Actions\ActivityLog\CreateActivityLogAction;
use App\Actions\ActivityLog\GetPaginatedLogsAction;
use App\DTOs\ActivityLog\CreateActivityLogDTO;
use App\Models\ActivityLog;

class ActivityLogService
{
    public function __construct(
        protected GetPaginatedLogsAction $getPaginatedLogsAction,
        protected CreateActivityLogAction $createActivityLogAction
    ) {}

    /**
     * Get paginated activity logs with filters
     *
     * @param array $filters
     * @param int $page
     * @param int $limit
     * @param string $query
     * @param string $sortBy
     * @param string $sortOrder
     * @return array
     */
    public function getPaginatedLogs(
        array $filters = [],
        int $page = 1,
        int $limit = 15,
        string $query = '',
        string $sortBy = 'created_at',
        string $sortOrder = 'desc'
    ): array {
        return $this->getPaginatedLogsAction->execute(
            $filters,
            $page,
            $limit,
            $query,
            $sortBy,
            $sortOrder
        );
    }

    /**
     * Create a new activity log
     *
     * @param CreateActivityLogDTO $dto
     * @return ActivityLog
     */
    public function createLog(CreateActivityLogDTO $dto): ActivityLog
    {
        return $this->createActivityLogAction->execute($dto);
    }
}
