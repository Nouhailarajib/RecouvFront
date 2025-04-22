
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Client } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { clients } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  numeroFacture: z.string().min(1, { message: 'Numéro de facture requis' }),
  dateEmission: z.string().min(1, { message: 'Date d\'émission requise' }),
  montantFacture: z.coerce.number().positive({ message: 'Le montant doit être positif' }),
  echeance: z.string().min(1, { message: 'Date d\'échéance requise' }),
  clientId: z.string().min(1, { message: 'Client requis' }),
  actionRecouvrement: z.string().optional(),
});

type CreanceFormProps = {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  onCancel: () => void;
};

const CreanceForm = ({ onSubmit, onCancel }: CreanceFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numeroFacture: '',
      dateEmission: new Date().toISOString().slice(0, 10),
      montantFacture: 0,
      echeance: '',
      clientId: '',
      actionRecouvrement: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit(data);
    toast.success('Créance ajoutée avec succès');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="numeroFacture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de facture</FormLabel>
              <FormControl>
                <Input placeholder="FAC-001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="clientId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un client" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.nom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateEmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date d'émission</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="montantFacture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Montant (€)</FormLabel>
              <FormControl>
                <Input type="number" min="0" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="echeance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date d'échéance</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="actionRecouvrement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Actions de recouvrement</FormLabel>
              <FormControl>
                <Input placeholder="Actions prévues..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button" onClick={onCancel}>
            Annuler
          </Button>
          <Button type="submit">
            Ajouter la créance
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreanceForm;
