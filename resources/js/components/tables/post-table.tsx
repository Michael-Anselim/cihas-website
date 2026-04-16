import { Form } from '@inertiajs/react';
import { Edit, Trash } from 'lucide-react';
import { edit } from '@/actions/App/Http/Controllers/PostController';
import { destroy } from '@/routes/posts';
import type { Post, PostResponse } from '@/types';
import TextLink from '../text-link';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';

export default function PostTable({ data, pagination }: { data: Post[]; pagination: PostResponse }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>S/N</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((post, index) => (
                    <TableRow key={post.id}>
                        <TableCell>{(pagination.current_page - 1) * pagination.per_page + index + 1}</TableCell>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.department?.name || '-'}</TableCell>
                        <TableCell className="capitalize">{post.category}</TableCell>
                        <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Button size="sm" asChild>
                                    <TextLink href={edit(post.id)}>
                                        <Edit />
                                    </TextLink>
                                </Button>

                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive">
                                            <Trash />
                                        </Button>
                                    </AlertDialogTrigger>

                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Read before deleting !!
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone.
                                                This will permanently delete
                                                your post and its associated files.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            <Form
                                                method="delete"
                                                action={destroy({
                                                    id: post.id,
                                                })}
                                            >
                                                <AlertDialogAction type="submit">
                                                    Continue
                                                </AlertDialogAction>
                                            </Form>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
