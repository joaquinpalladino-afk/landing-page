"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Language } from '@/app/types';
import { COPY } from '@/app/constants';

interface WaitlistFormProps {
  language: Language;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const WaitlistForm: React.FC<WaitlistFormProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const copy = COPY[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !agreed) {
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(language === Language.EN ? "You're on the list! We'll be in touch." : "¡Estás en la lista! Nos pondremos en contacto.");
        setEmail('');
        setAgreed(false);
      } else {
        setStatus('error');
        setMessage(data.message || (language === Language.EN ? 'Something went wrong. Please try again.' : 'Algo salió mal. Por favor, inténtalo de nuevo.'));
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={copy.formPlaceholder}
          required
          className="flex-grow w-full px-4 py-3 rounded-md bg-[#444444] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#156193]"
        />
        <button
          type="submit"
          disabled={!agreed || status === 'loading'}
          className={`bg-[#156193] text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-[#156193]/30 ${
            !agreed || status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
          {status === 'loading' ? (language === Language.EN ? 'Joining...' : 'Uniendo...') : copy.formButton}
        </button>
      </div>
      <div className="mt-4 flex items-start">
        <input
          type="checkbox"
          id="terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
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
      {status === 'error' && (
        <div className="mt-4 text-center bg-red-600/20 border border-red-800 text-white py-3 px-5 rounded-lg">
          <p className="font-semibold">{message}</p>
        </div>
      )}
    </form>
  );
};

export default WaitlistForm;
