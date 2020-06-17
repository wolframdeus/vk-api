import {IdTitlePair, PseudoBooleanType} from '../../types';

/**
 * Structure representing some pager
 */
export interface Pager<Item> {
  count: number;
  items: Item[];
}

/**
 * Default pager with item as object with id and title
 */
type DefaultPager = Pager<IdTitlePair>;

type FormatBooleansOverridableProps = 'needAll' | 'extended';

/**
 * Format booleans overridable props
 */
export type FormatBooleansOverridable = {
  [key in FormatBooleansOverridableProps]?: boolean;
}

/**
 * Overridden by formatBooleans return type
 */
export type FormatBooleansOverridden<T> = Omit<T, FormatBooleansOverridableProps> & {
  [key in FormatBooleansOverridableProps]?: PseudoBooleanType;
}

/**
 * @see https://vk.com/dev/database.getChairs
 */
export interface GetChairsParams {
  facultyId: number;
  offset?: number;
  count?: number;
}

export type GetChairsResult = IdTitlePair[];

/**
 * @see https://vk.com/dev/database.getCities
 */
export interface GetCitiesParams {
  countryId: number;
  regionId?: number;
  q?: string;
  needAll?: boolean;
  offset?: number;
  count?: number;
}

export type GetCitiesResult = Pager<IdTitlePair & {
  area?: string;
  region?: string;
  important?: boolean;
}>;

/**
 * @see https://vk.com/dev/database.getCitiesById
 */
export interface GetCitiesByIdParams {
  cityIds?: number[];
}

export type GetCitiesByIdResult = IdTitlePair[];

/**
 * @see https://vk.com/dev/database.getCountries
 */
export interface GetCountriesParams {
  needAll?: boolean;
  code?: string[];
  offset?: number;
  count?: number;
}

export type GetCountriesResult = DefaultPager;

/**
 * @see https://vk.com/dev/database.getCountriesById
 */
export interface GetCountriesByIdParams {
  countryIds?: number[];
}

export type GetCountriesByIdResult = IdTitlePair[];

/**
 * @see https://vk.com/dev/database.getFaculties
 */
export interface GetFacultiesParams {
  universityId: number;
  offset?: number;
  count?: number;
}

export type GetFacultiesResult = DefaultPager;

/**
 * @see https://vk.com/dev/database.getMetroStations
 */
export interface GetMetroStationsParams {
  cityId: number;
  offset?: number;
  count?: number;
  extended?: boolean;
}

export type GetMetroStationsResult = Pager<{
  id: number;
  name: string;
  color: string;
}>;

/**
 * @see https://vk.com/dev/database.getMetroStationsById
 */
export interface GetMetroStationsByIdParams {
  stationIds?: number[];
}

export type GetMetroStationsByIdResult = Array<{
  id: number;
  name: string;
  color: string;
  cityId: number;
}>

/**
 * @see https://vk.com/dev/database.getRegions
 */
export interface GetRegionsParams {
  countryId: number;
  q?: string;
  offset?: number;
  count?: number;
}

export type GetRegionsResult = DefaultPager;

/**
 * @see https://vk.com/dev/database.getSchoolClasses
 */
export interface GetSchoolClassesParams {
  countryId?: number;
}

type SchoolClassId = number;
type SchoolClassLetter = string;

export type GetSchoolClassesResult = [SchoolClassId, SchoolClassLetter][];

/**
 * @see https://vk.com/dev/database.getSchools
 */
export interface GetSchoolsParams {
  cityId: number;
  q?: string;
  offset?: number;
  count?: number;
}

export type GetSchoolsResult = DefaultPager;

/**
 * @see https://vk.com/dev/database.getUniversities
 */
export interface GetUniversitiesParams {
  countryId?: number;
  cityId: number;
  q?: string;
  offset?: number;
  count?: number;
}

export type GetUniversitiesResult = DefaultPager;