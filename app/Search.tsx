/* eslint-disable @next/next/no-async-client-component */
'use client'

import getCurrentUser from '@/actions/getCurrentUser'
import getListings, { IListingsParams } from '@/actions/getListings'
import ClientOnly from '@/components/ClientOnly'
import EmptyState from '@/components/EmptyState'
import { useSearchParams } from 'next/navigation'

interface SearchProps {
    searchParams: IListingsParams
};

export default function Search({ searchParams }: SearchProps) {


    const search = useSearchParams().get('search')
    const listings = getListings(searchParams);
    const currentUser = getCurrentUser();
    console.log(search)

    return (

        <ClientOnly>
            <EmptyState showReset />
        </ClientOnly>

    );
}




