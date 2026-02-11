import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitFreeTrialForm } from '@/hooks/useQueries';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDateTime: string;
  preferredProgram: string;
  notes?: string;
}

export default function FreeTrialBookingForm() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const submitMutation = useSubmitFreeTrialForm();

  const onSubmit = async (data: FormData) => {
    try {
      await submitMutation.mutateAsync({
        ...data,
        preferredProgram: selectedProgram,
      });
      reset();
      setSelectedProgram('');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (submitMutation.isSuccess) {
    return (
      <Card className="border-[oklch(0.50_0.20_145)]/20">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle2 className="h-16 w-16 text-[oklch(0.50_0.20_145)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-6">
              Your free trial session has been booked. We'll contact you shortly to confirm the details and answer any questions.
            </p>
            <Button onClick={() => submitMutation.reset()} variant="outline">
              Book Another Session
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-[oklch(0.50_0.20_145)]/20">
      <CardHeader>
        <CardTitle>Book Your Free Trial</CardTitle>
        <CardDescription>
          Experience Hype The Gym with a complimentary trial session. No commitment required.
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
            <Label htmlFor="preferredDateTime">Preferred Date & Time *</Label>
            <Input
              id="preferredDateTime"
              type="datetime-local"
              {...register('preferredDateTime', { required: 'Date and time is required' })}
            />
            {errors.preferredDateTime && (
              <p className="text-sm text-destructive">{errors.preferredDateTime.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredProgram">Interested Program *</Label>
            <Select value={selectedProgram} onValueChange={setSelectedProgram} required>
              <SelectTrigger>
                <SelectValue placeholder="Choose a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weight-loss">Weight Loss Training</SelectItem>
                <SelectItem value="muscle-building">Muscle Building</SelectItem>
                <SelectItem value="personal-training">Personal Training</SelectItem>
                <SelectItem value="cardio">Cardio Training</SelectItem>
                <SelectItem value="crossfit-hiit">CrossFit & HIIT</SelectItem>
                <SelectItem value="yoga-zumba">Yoga & Zumba</SelectItem>
                <SelectItem value="strength-conditioning">Strength & Conditioning</SelectItem>
                <SelectItem value="fat-loss-bootcamp">Fat Loss Bootcamp</SelectItem>
                <SelectItem value="nutrition-coaching">Diet & Nutrition Coaching</SelectItem>
              </SelectContent>
            </Select>
            {!selectedProgram && submitMutation.isError && (
              <p className="text-sm text-destructive">Please select a program</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              {...register('notes')}
              placeholder="Any specific questions or requirements?"
              rows={3}
            />
          </div>

          {submitMutation.isError && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {submitMutation.error instanceof Error 
                ? submitMutation.error.message 
                : 'Failed to submit booking. Please try again.'}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[oklch(0.50_0.20_145)] to-[oklch(0.45_0.18_200)] hover:opacity-90"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Booking...
              </>
            ) : (
              'Book Free Trial'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
