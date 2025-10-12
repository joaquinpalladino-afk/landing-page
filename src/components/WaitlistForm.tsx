"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

interface WaitlistFormProps {
  language: Language;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ language }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const copy = COPY[language];

  const formSchema = z.object({
    email: z.string().email({ message: copy.formInvalidEmail }),
    agreed: z.boolean().refine((val) => val === true, {
      message: copy.formAgreement,
    }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(language === Language.EN ? "You're on the list! We'll be in touch." : "¡Estás en la lista! Nos pondremos en contacto.");
        reset();
      } else {
        setStatus('error');
        setMessage(result.message || (language === Language.EN ? 'Something went wrong. Please try again.' : 'Algo salió mal. Por favor, inténtalo de nuevo.'));
      }
    } catch (error) {
      setStatus('error');
      setMessage(language === Language.EN ? 'An error occurred. Please try again later.' : 'Ocurrió un error. Por favor, inténtalo más tarde.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center bg-[#156193]/20 border border-[#156193] text-white py-4 px-6 rounded-lg">
        <p className="font-semibold">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          {...register('email')}
          type="email"
          placeholder={copy.formPlaceholder}
          className={`flex-grow w-full px-4 py-3 rounded-md bg-[#444444] text-white placeholder-gray-400 border ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-[#156193]`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#156193] text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-[#156193]/30 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
          {isSubmitting ? (language === Language.EN ? 'Joining...' : 'Uniendo...') : copy.formButton}
        </button>
      </div>
      {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
      
      <div className="mt-4 flex items-start">
        <input
          {...register('agreed')}
          type="checkbox"
          id="terms"
          className="h-4 w-4 text-[#156193] focus:ring-[#156193] border-gray-300 rounded mt-1"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
          I agree to the{' '}
          <Link href="/terms-of-use" className="underline hover:text-white">
            Terms of Use
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
      {errors.agreed && <p className="mt-2 text-sm text-red-500">{errors.agreed.message}</p>}

      {status === 'error' && (
        <div className="mt-4 text-center bg-red-600/20 border border-red-800 text-white py-3 px-5 rounded-lg">
          <p className="font-semibold">{message}</p>
        </div>
      )}
    </form>
  );
};

export default WaitlistForm;
