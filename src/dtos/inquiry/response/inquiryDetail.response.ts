export interface InquriyByIdResponseDto{
    title: string;
    username: string;
    trainerName?: string;
    content: string;
    response?: string;
    isPrivated: boolean;
    createdAt: string;
    updatedAt: string;
}