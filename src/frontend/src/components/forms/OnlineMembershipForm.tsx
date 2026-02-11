import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitMembershipForm } from '@/hooks/useQueries';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  selectedPlan: string;
  preferredStartDate: string;
  message?: string;
}

export default function OnlineMembershipForm() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const submitMutation = useSubmitMembershipForm();

  const onSubmit = async (data: FormData) => {
    try {
      await submitMutation.mutateAsync({
        ...data,
        selectedPlan,
      });
      reset();
      setSelectedPlan('');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (submitMutation.isSuccess) {
    return (
      <Card className="border-[oklch(0.65_0.25_25)]/20">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle2 className="h-16 w-16 text-[oklch(0.65_0.25_25)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              Your membership application has been received. Our team will contact you shortly to complete your registration.
            </p>
            <Button onClick={() => submitMutation.reset()} variant="outline">
              Submit Another Application
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-[oklch(0.65_0.25_25)]/20">
      <CardHeader>
        <CardTitle>Join Hype The Gym</CardTitle>
        <CardDescription>
          Fill out the form below and our team will contact you to complete your membership registration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              {...register('fullName', { required: 'Full name is required' })}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName.message}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                placeholder="+91 XXXXXXXXXX"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="selectedPlan">Select Membership Plan *</Label>
            <Select value={selectedPlan} onValueChange={setSelectedPlan} required>
              <SelectTrigger>
                <SelectValue placeholder="Choose a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic Plan</SelectItem>
                <SelectItem value="standard">Standard Plan</SelectItem>
                <SelectItem value="premium">Premium Plan</SelectItem>
              </SelectContent>
            </Select>
            {!selectedPlan && submitMutation.isError && (
              <p className="text-sm text-destructive">Please select a plan</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredStartDate">Preferred Start Date *</Label>
            <Input
              id="preferredStartDate"
              type="date"
              {...register('preferredStartDate', { required: 'Start date is required' })}
            />
            {errors.preferredStartDate && (
              <p className="text-sm text-destructive">{errors.preferredStartDate.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Tell us about your fitness goals..."
              rows={4}
            />
          </div>

          {submitMutation.isError && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {submitMutation.error instanceof Error 
                ? submitMutation.error.message 
                : 'Failed to submit form. Please try again.'}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] hover:opacity-90"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
