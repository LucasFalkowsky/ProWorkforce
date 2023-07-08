import useSWR, { KeyedMutator } from 'swr'
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'
import { WeekData } from '../components/molecules/m-week-row'
import { useTranslation } from 'next-i18next'

const calendarRoute = '/api/calendar/'
const phaseCalendarRoute = '/api/phase-calendar/'

type calendarReturnType = {
    calendar?: WeekData[],
    calendarError?: Error,
    isLoadingCalendar: boolean,
    mutateCalendar: KeyedMutator<WeekData[]>
}

const getCalendar = async ([url]: [string, string]): Promise<WeekData[]> => {
    return fetchGet<WeekData[]>(url)
}

const useCalendar = (projectId: string): calendarReturnType => {
    const { t } = useTranslation()
    const country = t('country-code')
    const { data, error, isValidating, mutate } = useSWR<WeekData[], FetchError>(
        [`${calendarRoute}${country}/${projectId}`], getCalendar,
    );
    return {
        calendar: data,
        calendarError: error,
        isLoadingCalendar: isValidating,
        mutateCalendar: mutate,
    }
}

const getPhaseCalendar = async ([url]: [string, string]): Promise<WeekData[]> => {
    return fetchGet<WeekData[]>(url)
}

const usePhaseCalendar = (phaseId: string): calendarReturnType => {
    const { t } = useTranslation()
    const country = t('country-code')
    const { data, error, isValidating, mutate } = useSWR<WeekData[], FetchError>(
        [`${calendarRoute}${country}/${phaseId}`], getPhaseCalendar,
    );
    return {
        calendar: data,
        calendarError: error,
        isLoadingCalendar: isValidating,
        mutateCalendar: mutate,
    }
}

export {
    useCalendar,
    usePhaseCalendar,
}