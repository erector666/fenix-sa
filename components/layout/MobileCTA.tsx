'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'

const translations = {
  fr: {
    call: 'Appeler',
    quote: 'Devis',
  },
  en: {
    call: 'Call',
    quote: 'Quote',
  },
}

export function MobileCTA() {
... [message truncated to 10000 chars] ...