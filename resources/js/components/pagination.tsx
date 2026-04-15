import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './ui/pagination';

//pagination props interface
interface PaginationProps {
    currentPage: number;
    isActive: boolean;
    nextPageUrl?: string;
    prevPageUrl?: string;
}

export default function TablePagination({
    currentPage,
    nextPageUrl,
    isActive,
    prevPageUrl,
}: PaginationProps) {
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href={prevPageUrl}>
                            Previous
                        </PaginationPrevious>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink isActive={isActive}>
                            {currentPage.toString()}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={nextPageUrl}>Next</PaginationNext>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}
