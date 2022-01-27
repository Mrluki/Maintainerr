export class SettingDto {
  id: number;

  clientId: string;

  applicationTitle: string;

  applicationUrl: string;

  apikey: string;

  locale: string;

  cacheImages: number;

  plex_name: string;

  plex_hostname: string;

  plex_port: number;

  plex_ssl: number;

  overseerr_url: string;

  overseerr_api_key: string;

  radarr_url: string;

  radarr_api_key: string;

  sonarr_url: string;

  sonarr_api_key: string;

  collection_handler_job_cron: string;

  rules_handler_job_cron: string;
}
