import { Form } from '@inertiajs/react';
import { Edit, Trash } from 'lucide-react';
import { destroy, edit } from '@/routes/programs';
import type { Program } from '@/types';
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

export default function ProgramsTable({ data }: { data: Program[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>s/n</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Levels</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((program) => (
                    <TableRow key={program.name}>
                        <TableCell>{program.id}</TableCell>
                        <TableCell>{program.name}</TableCell>
                        <TableCell>{program.department.name}</TableCell>
                        <TableCell>
                            {program.type === 'short_course'
                                ? 'short course'
                                : 'long course'}
                        </TableCell>
                        <TableCell>{program.levels}</TableCell>
                        <TableCell>{program.status}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Button size="sm" asChild>
                                    <TextLink href={edit(program.id)}>
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
                                                your program.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            <Form
                                                method="delete"
                                                action={destroy({
                                                    id: program.id,
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
