import { Form } from '@inertiajs/react';
import { Edit, Trash } from 'lucide-react';
import { edit } from '@/actions/App/Http/Controllers/DepartmentController';
import { destroy } from '@/routes/departments';
import type { Department } from '@/types';
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

export default function DepartmentTable({ data }: { data: Department }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>s/n</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((department) => (
                    <TableRow key={department.name}>
                        <TableCell>{department.id}</TableCell>
                        <TableCell>{department.name}</TableCell>
                        <TableCell>{department.code}</TableCell>
                        <TableCell>{department.status}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Button size="sm" asChild>
                                    <TextLink href={edit(department.id)}>
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
                                                your department.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            <Form
                                                method="delete"
                                                action={destroy({
                                                    id: department.id,
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
