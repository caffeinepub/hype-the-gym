import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface MembershipFormData {
  fullName: string;
  phone: string;
  email: string;
  selectedPlan: string;
  preferredStartDate: string;
  message?: string;
}

interface FreeTrialFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDateTime: string;
  preferredProgram: string;
  notes?: string;
}

export function useSubmitMembershipForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: MembershipFormData) => {
      if (!actor) throw new Error('Actor not initialized');
      
      await actor.submitMembershipForm(
        data.fullName,
        data.phone,
        data.email,
        data.selectedPlan,
        data.preferredStartDate,
        data.message || null
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['membershipForms'] });
    },
  });
}

export function useSubmitFreeTrialForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FreeTrialFormData) => {
      if (!actor) throw new Error('Actor not initialized');
      
      await actor.submitFreeTrialForm(
        data.fullName,
        data.phone,
        data.email,
        data.preferredDateTime,
        data.preferredProgram,
        data.notes || null
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['freeTrialForms'] });
    },
  });
}
