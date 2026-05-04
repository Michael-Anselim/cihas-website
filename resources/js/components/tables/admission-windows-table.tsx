import { Form } from '@inertiajs/react';
import { Edit, Trash } from 'lucide-react';
import { destroy, edit } from '@/routes/admission-windows';
import type {
    AdmissionWindow,
    AdmissionWindowResponse,
} from '@/types';
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

export default function AdmiWindowTable({
    data,
    pagination,
}: {
    data: AdmissionWindow[];
    pagination: AdmissionWindowResponse;
}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>s/n</TableHead>
                    <TableHead>Academic Year</TableHead>
                    <TableHead>Start date</TableHead>
                    <TableHead>End date</TableHead>
                    <TableHead>Admission window</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((admission, index) => (
                    <TableRow key={admission.id}>
                        <TableCell>
                            {(pagination.current_page - 1) *
                                pagination.per_page +
                                index +
                                1}
                        </TableCell>
                        <TableCell>{admission.academic_year}</TableCell>
                        <TableCell>{admission.start_date}</TableCell>
                        <TableCell>{admission.end_date}</TableCell>
                        <TableCell>{admission.admission_window}</TableCell>
                        <TableCell>{admission.status}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Button size="sm" asChild>
                                    <TextLink href={edit(admission.id)}>
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
                                                your admission window.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            <Form
                                                method="delete"
                                                action={destroy({
                                                    id: admission.id,
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
