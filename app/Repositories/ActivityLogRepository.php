<?php

namespace App\Repositories;

use App\Models\ActivityLog;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class ActivityLogRepository
{
    public function __construct(
        protected ActivityLog $model
    ) {}

    public function create(array $data): ActivityLog
    {
        return $this->model->create($data);
    }

    public function getPaginatedLogs(
        $filters,
        $page,
        $limit,
        $query,
        $sortBy,
        $sortOrder
    ): array {
        $queryBuilder = $this->model
            ->newQuery()
            ->when(isset($filters['event']), function (Builder $query) use ($filters) {
                $query->where('event', $filters['event']);
            })
            ->when(isset($filters['model_type']), function (Builder $query) use ($filters) {
                $query->where('model_type', $filters['model_type']);
            })
            ->when(isset($filters['model_id']), function (Builder $query) use ($filters) {
                $query->where('model_id', $filters['model_id']);
            })
            ->when(isset($filters['action']), function (Builder $query) use ($filters) {
                $query->where('action', $filters['action']);
            })
            ->when(isset($filters['user_id']), function (Builder $query) use ($filters) {
                $query->where('user_id', $filters['user_id']);
            })
            ->when(isset($filters['ip_address']), function (Builder $query) use ($filters) {
                $query->where('ip_address', $filters['ip_address']);
            })
            ->when(isset($filters['user_agent']), function (Builder $query) use ($filters) {
                $query->where('user_agent', $filters['user_agent']);
            })
            ->when($query, function (Builder $queryBuilder) use ($query) {
                $queryBuilder->where(function (Builder $q) use ($query) {
                    $q->where('event', 'like', '%' . $query . '%')
                        ->orWhere('model_type', 'like', '%' . $query . '%')
                        ->orWhere('model_id', 'like', '%' . $query . '%')
                        ->orWhere('action', 'like', '%' . $query . '%');
                });
            })
            ->with('user');

        if ($sortBy) {
            $queryBuilder->orderBy($sortBy, $sortOrder);
        }

        $paginator = $queryBuilder->paginate($limit, ['*'], 'page', $page);

        return [
            'data' => $paginator->items(),
            'meta' => [
                'totalItems' => $paginator->total(),
                'itemsCount' => $paginator->count(),
                'itemsPerPage' => $paginator->perPage(),
                'totalPages' => $paginator->lastPage(),
                'currentPage' => $paginator->currentPage(),
            ]
        ];
    }
}
