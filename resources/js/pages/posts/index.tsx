import { Head, usePage } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import Heading from '@/components/heading';
import TablePagination from '@/components/pagination';
import PostTable from '@/components/tables/post-table';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { PageProps } from '@inertiajs/core';
import type { Post, PostResponse } from '@/types';

interface PostsProps extends PageProps {
    posts: PostResponse;
}

export default function Posts() {
    const { posts } = usePage<PostsProps>().props;
    console.log(posts);
    const data: Post[] = posts.data;

    return (
        <>
            <Head title="Posts" />
            <div className="space-y-8 p-4">
                <Heading
                    title="Manage posts"
                    description="Manage posts details, visibility and status"
                />

                <div className="flex justify-between">
                    <Badge variant="secondary">
                        {posts.total}- records found
                    </Badge>
                    <Button asChild>
                        <TextLink href="/posts/create">
                            <PlusCircle /> Add post
                        </TextLink>
                    </Button>
                </div>

                {/** posts table */}
                <PostTable data={data} pagination={posts} />
                <TablePagination
                    isActive={true}
                    currentPage={posts.current_page}
                    prevPageUrl={posts.prev_page_url}
                    nextPageUrl={posts.next_page_url}
                />
            </div>
        </>
    );
}

Posts.layout = {
    breadcrumbs: [
        {
            title: 'Posts',
            href: '/posts',
        },
    ],
};
