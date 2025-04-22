
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { creances } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  creanceId: z.string().min(1, { message: 'Créance requise' }),
  typeRelance: z.enum(['email', 'téléphone', 'courrier']),
  dateRelance: z.string().min(1, { message: 'Date de relance requise' }),
  statut: z.enum(['envoyée', 'en attente', 'répondue']),
  commentaire: z.string().optional(),
});

type RelanceFormProps = {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  onCancel: () => void;
};

const RelanceForm = ({ onSubmit, onCancel }: RelanceFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      creanceId: '',
      typeRelance: 'email',
      dateRelance: new Date().toISOString().slice(0, 10),
      statut: 'en attente',
      commentaire: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit(data);
    toast.success('Relance ajoutée avec succès');
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
                  {creances.filter(c => c.statut === 'retard' || c.statut === 'contentieux').map((creance) => (
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
          name="typeRelance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de relance</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="téléphone">Téléphone</SelectItem>
                  <SelectItem value="courrier">Courrier</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateRelance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de relance</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="statut"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Statut</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un statut" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="en attente">En attente</SelectItem>
                  <SelectItem value="envoyée">Envoyée</SelectItem>
                  <SelectItem value="répondue">Répondue</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="commentaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Ajouter des notes ou commentaires sur cette relance..."
                  className="resize-none"
                  {...field}
                />
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
            Ajouter la relance
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RelanceForm;
