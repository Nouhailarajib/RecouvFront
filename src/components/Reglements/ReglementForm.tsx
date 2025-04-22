
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { clients, creances } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  creanceId: z.string().min(1, { message: 'Créance requise' }),
  montantEncaisse: z.coerce.number().positive({ message: 'Le montant doit être positif' }),
  dateReglement: z.string().min(1, { message: 'Date de règlement requise' }),
  modePaiement: z.enum(['espèces', 'chèque', 'virement', 'carte']),
  reference: z.string().optional(),
});

type ReglementFormProps = {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  onCancel: () => void;
};

const ReglementForm = ({ onSubmit, onCancel }: ReglementFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      creanceId: '',
      montantEncaisse: 0,
      dateReglement: new Date().toISOString().slice(0, 10),
      modePaiement: 'virement',
      reference: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit(data);
    toast.success('Règlement ajouté avec succès');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="creanceId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Créance</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une créance" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {creances.map((creance) => (
                    <SelectItem key={creance.id} value={creance.id}>
                      {creance.numeroFacture} - {creance.client.nom} ({creance.montantFacture}€)
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
          name="montantEncaisse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Montant encaissé (€)</FormLabel>
              <FormControl>
                <Input type="number" min="0" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateReglement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de règlement</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="modePaiement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode de paiement</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un mode de paiement" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="virement">Virement</SelectItem>
                  <SelectItem value="chèque">Chèque</SelectItem>
                  <SelectItem value="espèces">Espèces</SelectItem>
                  <SelectItem value="carte">Carte bancaire</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Référence</FormLabel>
              <FormControl>
                <Input placeholder="Référence du paiement..." {...field} />
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
            Ajouter le règlement
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReglementForm;
