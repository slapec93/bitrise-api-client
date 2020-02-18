/**
 * SWAGGER GENERATED API CLIENT
 * THIS FILE IS AUTO-GENERATED DO NOT EDIT!!
 */

// tslint:disable

import {
    timeout,
    stringifyQuery
} from './util';

export type RequestHeaders = {
    [header: string]: string;
}
export type RequestHeadersHandler = (headers: RequestHeaders) => RequestHeaders;

export type addons_Addon = {
    'banner_image' ? : string;
    'card_header_colors' ? : Array < string >
    ;
    'categories' ? : Array < string >
    ;
    'description' ? : string;
    'developer_links' ? : Array < addons_DeveloperLink >
    ;
    'documentation_url' ? : string;
    'has_ui' ? : boolean;
    'icon' ? : string;
    'id' ? : string;
    'is_beta' ? : boolean;
    'plans' ? : Array < addons_Plan >
    ;
    'platforms' ? : Array < string >
    ;
    'preview_images' ? : Array < string >
    ;
    'setup_guide' ? : addons_SetupGuide;
    'subtitle' ? : string;
    'summary' ? : string;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type addons_DeveloperLink = {
    'title' ? : string;
    'url' ? : string;
} & {
    [key: string]: any;
};
export type addons_Feature = {
    'available' ? : boolean;
    'description' ? : string;
    'quantity' ? : string;
} & {
    [key: string]: any;
};
export type addons_Plan = {
    'features' ? : Array < addons_Feature >
    ;
    'id' ? : string;
    'name' ? : string;
    'price' ? : number;
} & {
    [key: string]: any;
};
export type addons_SetupGuide = {
    'instructions' ? : Array < addons_SetupInstruction >
    ;
    'notification' ? : string;
} & {
    [key: string]: any;
};
export type addons_SetupInstruction = {
    'card_content' ? : string;
    'description' ? : string;
    'type' ? : string;
} & {
    [key: string]: any;
};
export type service_StandardErrorRespModel = {
    'message' ? : string;
} & {
    [key: string]: any;
};
export type v0_ActivityEventListResponseModel = {
    'data' ? : Array < v0_ActivityEventResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_ActivityEventResponseItemModel = {
    'created_at' ? : string;
    'description' ? : string;
    'event_icon' ? : string;
    'event_stype' ? : string;
    'repository_avatar_icon_url' ? : string;
    'repository_title' ? : string;
    'slug' ? : string;
    'target_path_string' ? : string;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type v0_AddOnAppResponseItemModel = {
    'icon' ? : string;
    'plan' ? : addons_Plan;
    'plan_started_at' ? : string;
    'slug' ? : string;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type v0_AddonsListResponseModel = {
    'data' ? : Array < addons_Addon >
    ;
} & {
    [key: string]: any;
};
export type v0_AddonsShowResponseModel = {
    'data' ? : addons_Addon;
} & {
    [key: string]: any;
};
export type v0_AndroidKeystoreFileUploadParams = {
    'alias' ? : string;
    'password' ? : string;
    'private_key_password' ? : string;
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
} & {
    [key: string]: any;
};
export type v0_AppAddOnResponseItemModel = {
    'description' ? : string;
    'documentation_url' ? : string;
    'has_ui' ? : boolean;
    'icon' ? : string;
    'id' ? : string;
    'is_beta' ? : boolean;
    'plan' ? : addons_Plan;
    'setup_guide' ? : addons_SetupGuide;
    'summary' ? : string;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppAddOnsListResponseModel = {
    'data' ? : Array < v0_AppAddOnResponseItemModel >
    ;
} & {
    [key: string]: any;
};
export type v0_AppConfigRequestParam = {
    'app_config_datastore_yaml' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppConfigRespModel = {} & {
    [key: string]: string;
};
export type v0_AppFinishParams = {
    'config' ? : string;
    'envs' ? : {} & {
        [key: string]: string;
    };
    'mode' ? : string;
    'organization_slug' ? : string;
    'project_type' ? : string;
    'stack_id' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppFinishRespModel = {
    'branch_name' ? : string;
    'build_trigger_token' ? : string;
    'is_webhook_auto_reg_supported' ? : boolean;
    'status' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppListResponseModel = {
    'data' ? : Array < v0_AppResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_AppRespModel = {
    'slug' ? : string;
    'status' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppResponseItemModel = {
    'avatar_url' ? : string;
    'is_disabled' ? : boolean;
    'is_public' ? : boolean;
    'owner' ? : v0_OwnerAccountResponseModel;
    'project_type' ? : string;
    'provider' ? : string;
    'repo_owner' ? : string;
    'repo_slug' ? : string;
    'repo_url' ? : string;
    'slug' ? : string;
    'status' ? : number;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppShowResponseModel = {
    'data' ? : v0_AppResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_AppUploadParams = {
    'git_owner' ? : string;
    'git_repo_slug' ? : string;
    'is_public' ? : boolean;
    'provider' ? : string;
    'repo_url' ? : string;
    'type' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppWebhookCreateParams = {
    'events' ? : string;
    'headers' ? : string;
    'secret' ? : string;
    'url' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppWebhookCreatedResponseModel = {
    'data' ? : v0_AppWebhookResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_AppWebhookDeletedResponseModel = {
    'data' ? : v0_AppWebhookResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_AppWebhookListResponseModel = {
    'data' ? : Array < v0_AppWebhookResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_AppWebhookResponseItemModel = {
    'created_at' ? : string;
    'events' ? : string;
    'headers' ? : string;
    'registered_by_addon' ? : boolean;
    'slug' ? : string;
    'updated_at' ? : string;
    'url' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppWebhookResponseModel = {
    'data' ? : v0_AppWebhookResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_AppWebhookUpdateParams = {
    'events' ? : string;
    'headers' ? : string;
    'url' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppleAPICredentialResponseItem = {
    'created_at' ? : string;
    'issuer_id' ? : string;
    'key_id' ? : string;
    'name' ? : string;
    'private_key' ? : string;
    'slug' ? : string;
    'updated_at' ? : string;
} & {
    [key: string]: any;
};
export type v0_AppleAPICredentialsListResponse = {
    'data' ? : Array < v0_AppleAPICredentialResponseItem >
    ;
} & {
    [key: string]: any;
};
export type v0_ArtifactDeleteResponseModel = {
    'data' ? : v0_ArtifactResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_ArtifactListElementResponseModel = {
    'artifact_meta' ? : string;
    'artifact_type' ? : string;
    'file_size_bytes' ? : number;
    'is_public_page_enabled' ? : boolean;
    'slug' ? : string;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type v0_ArtifactListResponseModel = {
    'data' ? : Array < v0_ArtifactListElementResponseModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_ArtifactResponseItemModel = {
    'artifact_meta' ? : string;
    'artifact_type' ? : string;
    'expiring_download_url' ? : string;
    'file_size_bytes' ? : number;
    'is_public_page_enabled' ? : boolean;
    'public_install_page_url' ? : string;
    'slug' ? : string;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type v0_ArtifactShowResponseModel = {
    'data' ? : v0_ArtifactResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_ArtifactUpdateParams = {
    'is_public_page_enabled' ? : boolean;
} & {
    [key: string]: any;
};
export type v0_AvatarCandidateCreateBulkParams = Array < v0_AvatarCandidateCreateParams >
;
export type v0_AvatarCandidateCreateParams = {
    'filename' ? : string;
    'filesize' ? : number;
} & {
    [key: string]: any;
};
export type v0_AvatarCandidateCreateResponseItem = {
    'filename' ? : string;
    'filesize' ? : number;
    'slug' ? : string;
    'upload_url' ? : string;
} & {
    [key: string]: any;
};
export type v0_AvatarCandidateCreateResponseItems = Array < v0_AvatarCandidateCreateResponseItem >
;
export type v0_AvatarPromoteParams = {
    'is_promoted' ? : boolean;
} & {
    [key: string]: any;
};
export type v0_AvatarPromoteResponseItemModel = {
    'is_candidate' ? : boolean;
    'slug' ? : string;
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
} & {
    [key: string]: any;
};
export type v0_AvatarPromoteResponseModel = {
    'data' ? : v0_AvatarPromoteResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_BranchListResponseModel = {
    'data' ? : Array < string >
    ;
} & {
    [key: string]: any;
};
export type v0_BuildAbortParams = {
    'abort_reason' ? : string;
    'abort_with_success' ? : boolean;
    'skip_notifications' ? : boolean;
} & {
    [key: string]: any;
};
export type v0_BuildAbortResponseModel = {
    'status' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildCertificateListResponseModel = {
    'data' ? : Array < v0_BuildCertificateResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_BuildCertificateResponseItemModel = {
    'certificate_password' ? : string;
    'download_url' ? : string;
    'is_expose' ? : boolean;
    'is_protected' ? : boolean;
    'processed' ? : boolean;
    'slug' ? : string;
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
    'upload_url' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildCertificateResponseModel = {
    'data' ? : v0_BuildCertificateResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_BuildCertificateUpdateParams = {
    'certificate_password' ? : string;
    'is_expose' ? : boolean;
    'is_protected' ? : boolean;
    'processed' ? : boolean;
} & {
    [key: string]: any;
};
export type v0_BuildCertificateUploadParams = {
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
} & {
    [key: string]: any;
};
export type v0_BuildListAllResponseItemModel = {
    'abort_reason' ? : string;
    'branch' ? : string;
    'build_number' ? : number;
    'commit_hash' ? : string;
    'commit_message' ? : string;
    'commit_view_url' ? : string;
    'environment_prepare_finished_at' ? : string;
    'finished_at' ? : string;
    'is_on_hold' ? : boolean;
    'machine_type_id' ? : string;
    'original_build_params' ? : string;
    'pull_request_id' ? : number;
    'pull_request_target_branch' ? : string;
    'pull_request_view_url' ? : string;
    'repository' ? : v0_AppResponseItemModel;
    'slug' ? : string;
    'stack_identifier' ? : string;
    'started_on_worker_at' ? : string;
    'status' ? : number;
    'status_text' ? : string;
    'tag' ? : string;
    'triggered_at' ? : string;
    'triggered_by' ? : string;
    'triggered_workflow' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildListAllResponseModel = {
    'data' ? : Array < v0_BuildListAllResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_BuildListResponseModel = {
    'data' ? : Array < v0_BuildResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_BuildLogChunkItemResponseModel = {
    'chunk' ? : string;
    'position' ? : number;
} & {
    [key: string]: any;
};
export type v0_BuildLogInfoResponseModel = {
    'expiring_raw_log_url' ? : string;
    'generated_log_chunks_num' ? : number;
    'is_archived' ? : boolean;
    'log_chunks' ? : Array < v0_BuildLogChunkItemResponseModel >
    ;
    'timestamp' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildParamsEnvironment = {
    'is_expand' ? : boolean;
    'mapped_to' ? : string;
    'value' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildRequestListResponseModel = {
    'data' ? : Array < v0_BuildRequestResponseItemModel >
    ;
} & {
    [key: string]: any;
};
export type v0_BuildRequestResponseItemModel = {
    'build_params' ? : string;
    'created_at' ? : string;
    'pull_request_url' ? : string;
    'slug' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildRequestUpdateParams = {
    'is_approved' ? : boolean;
} & {
    [key: string]: any;
};
export type v0_BuildRequestUpdateResponseModel = {
    'data' ? : v0_BuildRequestResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_BuildResponseItemModel = {
    'abort_reason' ? : string;
    'branch' ? : string;
    'build_number' ? : number;
    'commit_hash' ? : string;
    'commit_message' ? : string;
    'commit_view_url' ? : string;
    'environment_prepare_finished_at' ? : string;
    'finished_at' ? : string;
    'is_on_hold' ? : boolean;
    'machine_type_id' ? : string;
    'original_build_params' ? : string;
    'pull_request_id' ? : number;
    'pull_request_target_branch' ? : string;
    'pull_request_view_url' ? : string;
    'slug' ? : string;
    'stack_identifier' ? : string;
    'started_on_worker_at' ? : string;
    'status' ? : number;
    'status_text' ? : string;
    'tag' ? : string;
    'triggered_at' ? : string;
    'triggered_by' ? : string;
    'triggered_workflow' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildShowResponseModel = {
    'data' ? : v0_BuildResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_BuildTriggerParams = {
    'build_params' ? : v0_BuildTriggerParamsBuildParams;
    'hook_info' ? : v0_BuildTriggerParamsHookInfo;
} & {
    [key: string]: any;
};
export type v0_BuildTriggerParamsBuildParams = {
    'branch' ? : string;
    'branch_dest' ? : string;
    'branch_dest_repo_owner' ? : string;
    'branch_repo_owner' ? : string;
    'build_request_slug' ? : string;
    'commit_hash' ? : string;
    'commit_message' ? : string;
    'commit_paths' ? : Array < v0_CommitPaths >
    ;
    'diff_url' ? : string;
    'environments' ? : Array < v0_BuildParamsEnvironment >
    ;
    'pull_request_author' ? : string;
    'pull_request_head_branch' ? : string;
    'pull_request_id' ? : {} & {
        [key: string]: any;
    };
    'pull_request_merge_branch' ? : string;
    'pull_request_repository_url' ? : string;
    'skip_git_status_report' ? : boolean;
    'tag' ? : string;
    'workflow_id' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildTriggerParamsHookInfo = {
    'type' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildTriggerRespModel = {
    'build_number' ? : number;
    'build_slug' ? : string;
    'build_url' ? : string;
    'message' ? : string;
    'service' ? : string;
    'slug' ? : string;
    'status' ? : string;
    'triggered_workflow' ? : string;
} & {
    [key: string]: any;
};
export type v0_BuildWorkflowListResponseModel = {
    'data' ? : Array < string >
    ;
} & {
    [key: string]: any;
};
export type v0_CommitPaths = {
    'added' ? : Array < string >
    ;
    'modified' ? : Array < string >
    ;
    'removed' ? : Array < string >
    ;
} & {
    [key: string]: any;
};
export type v0_FindAvatarCandidateResponse = {
    'data' ? : Array < v0_FindAvatarCandidateResponseItem >
    ;
} & {
    [key: string]: any;
};
export type v0_FindAvatarCandidateResponseItem = {
    'download_url' ? : string;
    'filename' ? : string;
    'slug' ? : string;
} & {
    [key: string]: any;
};
export type v0_OrganizationDataModel = {
    'avatar_icon_url' ? : string;
    'concurrency_count' ? : number;
    'name' ? : string;
    'owners' ? : Array < v0_OrganizationOwner >
    ;
    'slug' ? : string;
} & {
    [key: string]: any;
};
export type v0_OrganizationListRespModel = {
    'data' ? : Array < v0_OrganizationDataModel >
    ;
} & {
    [key: string]: any;
};
export type v0_OrganizationOwner = {
    'email' ? : string;
    'slug' ? : string;
    'username' ? : string;
} & {
    [key: string]: any;
};
export type v0_OrganizationRespModel = {
    'data' ? : v0_OrganizationDataModel;
} & {
    [key: string]: any;
};
export type v0_OwnerAccountResponseModel = {
    'account_type' ? : string;
    'name' ? : string;
    'slug' ? : string;
} & {
    [key: string]: any;
};
export type v0_OwnerAddOnResponseItemModel = {
    'apps' ? : Array < v0_AddOnAppResponseItemModel >
    ;
    'documentation_url' ? : string;
    'has_ui' ? : boolean;
    'icon' ? : string;
    'id' ? : string;
    'is_beta' ? : boolean;
    'summary' ? : string;
    'title' ? : string;
} & {
    [key: string]: any;
};
export type v0_OwnerAddOnsListResponseModel = {
    'data' ? : Array < v0_OwnerAddOnResponseItemModel >
    ;
} & {
    [key: string]: any;
};
export type v0_PagingResponseModel = {
    'next' ? : string;
    'page_item_limit' ? : number;
    'total_item_count' ? : number;
} & {
    [key: string]: any;
};
export type v0_PlanDataModel = {
    'container_count' ? : number;
    'expires_at' ? : string;
    'id' ? : string;
    'name' ? : string;
    'price' ? : string;
} & {
    [key: string]: any;
};
export type v0_ProjectFileStorageDocumentUpdateParams = {
    'exposed_meta_datastore' ? : string;
    'is_expose' ? : boolean;
    'is_protected' ? : boolean;
    'processed' ? : boolean;
    'user_env_key' ? : string;
} & {
    [key: string]: any;
};
export type v0_ProjectFileStorageListResponseModel = {
    'data' ? : Array < v0_ProjectFileStorageResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_ProjectFileStorageResponseItemModel = {
    'download_url' ? : string;
    'exposed_meta_datastore' ? : string;
    'is_expose' ? : boolean;
    'is_protected' ? : boolean;
    'processed' ? : boolean;
    'slug' ? : string;
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
    'upload_url' ? : string;
    'user_env_key' ? : string;
} & {
    [key: string]: any;
};
export type v0_ProjectFileStorageResponseModel = {
    'data' ? : v0_ProjectFileStorageResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_ProjectFileStorageUploadParams = {
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
    'user_env_key' ? : string;
} & {
    [key: string]: any;
};
export type v0_ProvProfileDocumentUpdateParams = {
    'is_expose' ? : boolean;
    'is_protected' ? : boolean;
    'processed' ? : boolean;
} & {
    [key: string]: any;
};
export type v0_ProvisionProfileListResponseModel = {
    'data' ? : Array < v0_ProvisionProfileResponseItemModel >
    ;
    'paging' ? : v0_PagingResponseModel;
} & {
    [key: string]: any;
};
export type v0_ProvisionProfileResponseItemModel = {
    'download_url' ? : string;
    'is_expose' ? : boolean;
    'is_protected' ? : boolean;
    'processed' ? : boolean;
    'slug' ? : string;
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
    'upload_url' ? : string;
} & {
    [key: string]: any;
};
export type v0_ProvisionProfileResponseModel = {
    'data' ? : v0_ProvisionProfileResponseItemModel;
} & {
    [key: string]: any;
};
export type v0_ProvisionProfileUploadParams = {
    'upload_file_name' ? : string;
    'upload_file_size' ? : number;
} & {
    [key: string]: any;
};
export type v0_SSHKeyRespModel = {
    'status' ? : string;
} & {
    [key: string]: any;
};
export type v0_SSHKeyUploadParams = {
    'auth_ssh_private_key' ? : string;
    'auth_ssh_public_key' ? : string;
    'is_register_key_into_provider_service' ? : boolean;
} & {
    [key: string]: any;
};
export type v0_TestDeviceListResponseModel = {
    'data' ? : Array < v0_TestDeviceResponseItemModel >
    ;
} & {
    [key: string]: any;
};
export type v0_TestDeviceResponseItemModel = {
    'device_id' ? : string;
    'device_type' ? : string;
    'owner' ? : string;
} & {
    [key: string]: any;
};
export type v0_UserPlanDataModel = {
    'current_plan' ? : v0_PlanDataModel;
    'pending_plan' ? : v0_PlanDataModel;
    'trial_expires_at' ? : string;
} & {
    [key: string]: any;
};
export type v0_UserPlanRespModel = {
    'data' ? : v0_UserPlanDataModel;
} & {
    [key: string]: any;
};
export type v0_UserProfileDataModel = {
    'avatar_url' ? : string;
    'email' ? : string;
    'is_chat_available' ? : boolean;
    'slug' ? : string;
    'unconfirmed_email' ? : string;
    'username' ? : string;
} & {
    [key: string]: any;
};
export type v0_UserProfileRespModel = {
    'data' ? : v0_UserProfileDataModel;
} & {
    [key: string]: any;
};
export type v0_WebhookDeliveryItemResponseModel = {
    'created_at' ? : string;
    'request_headers' ? : string;
    'request_payload' ? : string;
    'request_url' ? : string;
    'response_body' ? : string;
    'response_headers' ? : string;
    'response_http_status' ? : string;
    'response_seconds' ? : string;
    'slug' ? : string;
    'updated_at' ? : string;
} & {
    [key: string]: any;
};
export type v0_WebhookDeliveryItemShowResponseModel = {
    'data' ? : v0_WebhookDeliveryItemResponseModel;
} & {
    [key: string]: any;
};
export type v0_WebhookRespModel = {
    'status' ? : string;
} & {
    [key: string]: any;
};
export type Response_app_config_datastore_show_200 = string;
export type Response_build_bitrise_yml_show_200 = string;

export interface ResponseWithBody < S extends number, T > {
    status: S;
    body: T;
}

export type QueryParameters = {
    [param: string]: any
};

export interface CommonRequestOptions {
    $queryParameters ? : QueryParameters;
    $domain ? : string;
    $path ? : string | ((path: string) => string);
    $timeout ? : number;
}

export const PUBLIC_DOMAIN: string = "https://api.bitrise.io/v0.1";

/**
 * Official REST API for Bitrise.io
 * @class BitriseAPI
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class BitriseAPI {
    private domain: string = PUBLIC_DOMAIN;
    private requestHeadersHandler ? : RequestHeadersHandler;
    private interceptors: InterceptorRegistrar;

    constructor(interceptors: InterceptorRegistrar, domain ? : string) {
        if (domain) {
            this.domain = domain;
        }

        this.interceptors = interceptors;
    }

    getDomain() {
        return this.domain;
    }

    setRequestHeadersHandler(handler: RequestHeadersHandler) {
        this.requestHeadersHandler = handler;
    }

    private request(method: string, url: string, body: any, headers: RequestHeaders, queryParameters: QueryParameters, opts: CommonRequestOptions): Promise < Response > {
        const reqTimeout = opts.$timeout || 10000;
        const query = stringifyQuery(queryParameters);
        url = query ? `${url}?${query}` : url;

        if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
            headers['Content-Type'] = 'application/json';
        }

        const fetchParams = {
            method,
            headers: this.requestHeadersHandler ? this.requestHeadersHandler({
                ...headers
            }) : headers,
        };

        if (body) {
            fetchParams["body"] = JSON.stringify(body);
        }

        this.interceptors.register();

        let result: Promise < Response > ;

        try {
            result = timeout(reqTimeout, fetch(url, fetchParams));
        } finally {
            this.interceptors.unregister();
        }

        return result;
    }

    private convertParameterCollectionFormat < T > (param: T, collectionFormat: string | undefined): T | string {
        if (Array.isArray(param) && param.length >= 2) {
            switch (collectionFormat) {
                case "csv":
                    return param.join(",");
                case "ssv":
                    return param.join(" ");
                case "tsv":
                    return param.join("\t");
                case "pipes":
                    return param.join("|");
                default:
                    return param;
            }
        }

        return param;
    }

    /**
     * List all the available Bitrise addons
     * @method
     * @name BitriseAPI#addons_list
     */
    async addons_list(parameters: {} & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AddonsListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/addons';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Show details of a specific Bitrise addon
     * @method
     * @name BitriseAPI#addons_show
     * @param {string} addonId - Addon ID
     */
    async addons_show(parameters: {
        'addonId': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AddonsShowResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/addons/{addon-id}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{addon-id}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['addonId'],
                    ''
                ).toString())}`
        );

        if (!parameters['addonId']) {
            throw new Error('Missing required  parameter: addonId');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the apps available for the authenticated account, including those that are owned by other users or Organizations.
     * @method
     * @name BitriseAPI#app_list
     * @param {string} sortBy - Order of the applications: sort them based on when they were created or the time of their last build
     * @param {string} next - Slug of the first app in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async app_list(parameters: {
        'sortBy' ? : "last_build_at" | "created_at",
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        if (parameters['sortBy'] !== undefined) {
            queryParameters['sort_by'] = this.convertParameterCollectionFormat(
                parameters['sortBy'],
                ''
            );
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Add a new app to Bitrise. This is the first step of the app registration process. To successfully set it up, you need to provide the required app parameters: your git provider, the repository URL, the slug of the repository as it appears at the provider, and the slug of the owner of the repository. Read more about the app creation process in our [detailed guide](https://devcenter.bitrise.io/api/adding-and-managing-apps/#adding-a-new-app).
     * @method
     * @name BitriseAPI#app_create
     * @param {} app - App parameters
     */
    async app_create(parameters: {
        'app': v0_AppUploadParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/register';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        if (parameters['app'] !== undefined) {
            requestBody = parameters['app'];
        }

        if (!parameters['app']) {
            throw new Error('Missing required  parameter: app');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get the details of a specific app by providing the app slug. You can get the app slug by calling the [/apps](https://api-docs.bitrise.io/#/application/app-list) endpoint or by opening the app on bitrise.io and copying the slug from the URL.
     * @method
     * @name BitriseAPI#app_show
     * @param {string} appSlug - App slug
     */
    async app_show(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppShowResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the provisioned addons for the authorized apps
     * @method
     * @name BitriseAPI#addon_list_by_app
     * @param {string} appSlug - App slug
     */
    async addon_list_by_app(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppAddOnsListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/addons';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the android keystore files that have been uploaded to a specific app.
     * @method
     * @name BitriseAPI#android_keystore_file_list
     * @param {string} appSlug - App slug
     * @param {string} next - Slug of the first android keystore file in the response
     * @param {integer} limit - Max number of build certificates per page is 50.
     */
    async android_keystore_file_list(parameters: {
        'appSlug': string,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProjectFileStorageListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/android-keystore-files';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Add a new Android keystore file to an app
     * @method
     * @name BitriseAPI#android_keystore_file_create
     * @param {string} appSlug - App slug
     * @param {} androidKeystoreFile - Android keystore file parameters
     */
    async android_keystore_file_create(parameters: {
        'appSlug': string,
        'androidKeystoreFile': v0_AndroidKeystoreFileUploadParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, v0_ProjectFileStorageResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/android-keystore-files';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['androidKeystoreFile'] !== undefined) {
            requestBody = parameters['androidKeystoreFile'];
        }

        if (!parameters['androidKeystoreFile']) {
            throw new Error('Missing required  parameter: androidKeystoreFile');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Add new avatar candidates to a specific app
     * @method
     * @name BitriseAPI#avatar_candidate_create
     * @param {string} appSlug - App slug
     * @param {} avatarCandidate - Avatar candidate parameters
     */
    async avatar_candidate_create(parameters: {
        'appSlug': string,
        'avatarCandidate': v0_AvatarCandidateCreateBulkParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, v0_AvatarCandidateCreateResponseItems > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/avatar-candidates';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['avatarCandidate'] !== undefined) {
            requestBody = parameters['avatarCandidate'];
        }

        if (!parameters['avatarCandidate']) {
            throw new Error('Missing required  parameter: avatarCandidate');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Promotes an avatar candidate for an app
     * @method
     * @name BitriseAPI#avatar_candidate_promote
     * @param {string} appSlug - App slug
     * @param {string} avatarSlug - Avatar candidate slug
     * @param {} avatarPromoteParams - Avatar promote parameters
     */
    async avatar_candidate_promote(parameters: {
        'appSlug': string,
        'avatarSlug': string,
        'avatarPromoteParams': v0_AvatarPromoteParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AvatarPromoteResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/avatar-candidates/{avatar-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{avatar-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['avatarSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['avatarSlug']) {
            throw new Error('Missing required  parameter: avatarSlug');
        }

        if (parameters['avatarPromoteParams'] !== undefined) {
            requestBody = parameters['avatarPromoteParams'];
        }

        if (!parameters['avatarPromoteParams']) {
            throw new Error('Missing required  parameter: avatarPromoteParams');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('PATCH', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get the full `bitrise.yml` configuration of an application, by providing the app slug. It returns the current `bitrise.yml` that is stored on bitrise.io in full, including the trigger map, the different workflows and the Steps.
     * @method
     * @name BitriseAPI#app_config_datastore_show
     * @param {string} appSlug - App slug
     */
    async app_config_datastore_show(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_app_config_datastore_show_200 > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/bitrise.yml';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'text/plain';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Upload a new bitrise.yml for your application.
     * @method
     * @name BitriseAPI#app_config_create
     * @param {string} appSlug - App slug
     * @param {} appConfig - App config parameters
     */
    async app_config_create(parameters: {
        'appSlug': string,
        'appConfig': v0_AppConfigRequestParam,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppConfigRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/bitrise.yml';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['appConfig'] !== undefined) {
            requestBody = parameters['appConfig'];
        }

        if (!parameters['appConfig']) {
            throw new Error('Missing required  parameter: appConfig');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List the existing branches of the repository of a specified Bitrise app.
     * @method
     * @name BitriseAPI#branch_list
     * @param {string} appSlug - App slug
     */
    async branch_list(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BranchListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/branches';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the build certificates that have been uploaded to a specific app. Read more in our [Listing the uploaded iOS code signing files of an app](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#listing-the-uploaded-ios-code-signing-files-of-an-app) guide.
     * @method
     * @name BitriseAPI#build_certificate_list
     * @param {string} appSlug - App slug
     * @param {string} next - Slug of the first build certificate in the response
     * @param {integer} limit - Max number of build certificates per page is 50.
     */
    async build_certificate_list(parameters: {
        'appSlug': string,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildCertificateListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-certificates';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Create a temporary pre-signed upload URL for the build certificate and upload the file to AWS with a simple `curl` request. To complete the uploading process and view your files on the Code Signing tab of your app, continue with the [POST /apps/{app-slug}/build-certificates/{build-certificate-slug}/uploaded](https://api-docs.bitrise.io/#/build-certificate/build-certificate-confirm) endpoint. Read more in our [Creating and uploading an iOS code signing file](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#creating--uploading-an-ios-code-signing-file) guide.
     * @method
     * @name BitriseAPI#build_certificate_create
     * @param {string} appSlug - App slug
     * @param {} buildCertificate - Build certificate parameters such as file name and its file size
     */
    async build_certificate_create(parameters: {
        'appSlug': string,
        'buildCertificate': v0_BuildCertificateUploadParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, v0_BuildCertificateResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-certificates';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['buildCertificate'] !== undefined) {
            requestBody = parameters['buildCertificate'];
        }

        if (!parameters['buildCertificate']) {
            throw new Error('Missing required  parameter: buildCertificate');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Retrieve data of a specific build certificate. You can fetch the build certificate slug for this endpoint if you first call the [GET /apps/{app-slug}/build-certificates](https://api-docs.bitrise.io/#/build-certificate/build-certificate-list) endpoint to list all available build certificates of an app. Read more in our [Getting a specific iOS code signing file's data](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#getting-a-specific-ios-code-signing-files-data) guide.
     * @method
     * @name BitriseAPI#build_certificate_show
     * @param {string} appSlug - App slug
     * @param {string} buildCertificateSlug - Build certificate slug
     */
    async build_certificate_show(parameters: {
        'appSlug': string,
        'buildCertificateSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildCertificateResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-certificates/{build-certificate-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-certificate-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildCertificateSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildCertificateSlug']) {
            throw new Error('Missing required  parameter: buildCertificateSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Delete an app's build certificate. You can fetch the build certificate slug for this endpoint if you first call the [GET /apps/{app-slug}/build-certificates](https://api-docs.bitrise.io/#/build-certificate/build-certificate-list) endpoint to list all available build certificates of an app. Read more in our [Deleting an iOS code signing file](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#deleting-an-ios-code-signing-file) guide.
     * @method
     * @name BitriseAPI#build_certificate_delete
     * @param {string} appSlug - App slug
     * @param {string} buildCertificateSlug - Build certificate slug
     */
    async build_certificate_delete(parameters: {
        'appSlug': string,
        'buildCertificateSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildCertificateResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-certificates/{build-certificate-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-certificate-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildCertificateSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildCertificateSlug']) {
            throw new Error('Missing required  parameter: buildCertificateSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('DELETE', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Update an uploaded build certificate's attributes. You can fetch the build certificate slug for this endpoint if you first call the [GET /apps/{app-slug}/build-certificates](https://api-docs.bitrise.io/#/build-certificate/build-certificate-list) endpoint. Read more in our [Updating an uploaded iOS code signing file](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#confirming-the-ios-code-signing-file-upload) guide.
     * @method
     * @name BitriseAPI#build_certificate_update
     * @param {string} appSlug - App slug
     * @param {string} buildCertificateSlug - Build certificate slug
     * @param {} buildCertificate - Build certificate parameters
     */
    async build_certificate_update(parameters: {
        'appSlug': string,
        'buildCertificateSlug': string,
        'buildCertificate': v0_BuildCertificateUpdateParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildCertificateResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-certificates/{build-certificate-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-certificate-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildCertificateSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildCertificateSlug']) {
            throw new Error('Missing required  parameter: buildCertificateSlug');
        }

        if (parameters['buildCertificate'] !== undefined) {
            requestBody = parameters['buildCertificate'];
        }

        if (!parameters['buildCertificate']) {
            throw new Error('Missing required  parameter: buildCertificate');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('PATCH', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * This is the last step of uploading a build certificate to Bitrise. Confirm the build certificate upload and view the file on the Code Signing tab of a specific app. Read more in our [Confirming the iOS code signing file upload](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#confirming-the-ios-code-signing-file-upload) guide.
     * @method
     * @name BitriseAPI#build_certificate_confirm
     * @param {string} appSlug - App slug
     * @param {string} buildCertificateSlug - Build certificate slug
     */
    async build_certificate_confirm(parameters: {
        'appSlug': string,
        'buildCertificateSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildCertificateResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-certificates/{build-certificate-slug}/uploaded';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-certificate-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildCertificateSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildCertificateSlug']) {
            throw new Error('Missing required  parameter: buildCertificateSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List the existing open build requests of a specified Bitrise app
     * @method
     * @name BitriseAPI#build_request_list
     * @param {string} appSlug - App slug
     */
    async build_request_list(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildRequestListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-requests';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Update a specific build request of a specific app
     * @method
     * @name BitriseAPI#build_request_update
     * @param {string} appSlug - App slug
     * @param {string} buildRequestSlug - Build request slug
     * @param {} buildRequest - Build request parameters
     */
    async build_request_update(parameters: {
        'appSlug': string,
        'buildRequestSlug': string,
        'buildRequest': v0_BuildRequestUpdateParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildRequestUpdateResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-requests/{build-request-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-request-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildRequestSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildRequestSlug']) {
            throw new Error('Missing required  parameter: buildRequestSlug');
        }

        if (parameters['buildRequest'] !== undefined) {
            requestBody = parameters['buildRequest'];
        }

        if (!parameters['buildRequest']) {
            throw new Error('Missing required  parameter: buildRequest');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('PATCH', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List the workflows that were triggered at any time for a given Bitrise app. Note that it might list workflows that are currently not defined in the app's `bitrise.yml` configuration - and conversely, workflows that were never triggered will not be listed even if they are defined in the `bitrise.yml` file.
     * @method
     * @name BitriseAPI#build_workflow_list
     * @param {string} appSlug - App slug
     */
    async build_workflow_list(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildWorkflowListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/build-workflows';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the builds of a specified Bitrise app. Set parameters to filter builds: for example, you can search for builds run with a given workflow or all builds that were triggered by Pull Requests. It returns all the relevant data of the build.
     * @method
     * @name BitriseAPI#build_list
     * @param {string} appSlug - App slug
     * @param {string} sortBy - Order of builds: sort them based on when they were created or the time when they were triggered
     * @param {string} branch - The branch which was built
     * @param {string} workflow - The name of the workflow used for the build
     * @param {string} commitMessage - The commit message of the build
     * @param {string} triggerEventType - The event that triggered the build (push, pull-request, tag)
     * @param {integer} pullRequestId - The id of the pull request that triggered the build
     * @param {integer} buildNumber - The build number
     * @param {integer} after - List builds run after a given date (Unix Timestamp)
     * @param {integer} before - List builds run before a given date (Unix Timestamp)
     * @param {integer} status - The status of the build: not finished (0), successful (1), failed (2), aborted with failure (3), aborted with success (4)
     * @param {string} next - Slug of the first build in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async build_list(parameters: {
        'appSlug': string,
        'sortBy' ? : "running_first" | "created_at",
        'branch' ? : string,
        'workflow' ? : string,
        'commitMessage' ? : string,
        'triggerEventType' ? : string,
        'pullRequestId' ? : number,
        'buildNumber' ? : number,
        'after' ? : number,
        'before' ? : number,
        'status' ? : number,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['sortBy'] !== undefined) {
            queryParameters['sort_by'] = this.convertParameterCollectionFormat(
                parameters['sortBy'],
                ''
            );
        }

        if (parameters['branch'] !== undefined) {
            queryParameters['branch'] = this.convertParameterCollectionFormat(
                parameters['branch'],
                ''
            );
        }

        if (parameters['workflow'] !== undefined) {
            queryParameters['workflow'] = this.convertParameterCollectionFormat(
                parameters['workflow'],
                ''
            );
        }

        if (parameters['commitMessage'] !== undefined) {
            queryParameters['commit_message'] = this.convertParameterCollectionFormat(
                parameters['commitMessage'],
                ''
            );
        }

        if (parameters['triggerEventType'] !== undefined) {
            queryParameters['trigger_event_type'] = this.convertParameterCollectionFormat(
                parameters['triggerEventType'],
                ''
            );
        }

        if (parameters['pullRequestId'] !== undefined) {
            queryParameters['pull_request_id'] = this.convertParameterCollectionFormat(
                parameters['pullRequestId'],
                ''
            );
        }

        if (parameters['buildNumber'] !== undefined) {
            queryParameters['build_number'] = this.convertParameterCollectionFormat(
                parameters['buildNumber'],
                ''
            );
        }

        if (parameters['after'] !== undefined) {
            queryParameters['after'] = this.convertParameterCollectionFormat(
                parameters['after'],
                ''
            );
        }

        if (parameters['before'] !== undefined) {
            queryParameters['before'] = this.convertParameterCollectionFormat(
                parameters['before'],
                ''
            );
        }

        if (parameters['status'] !== undefined) {
            queryParameters['status'] = this.convertParameterCollectionFormat(
                parameters['status'],
                ''
            );
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Trigger a new build. Specify an app slug and at least one parameter out of three: a git tag or git commit hash, a branch, or a workflow ID. You can also set specific parameters for Pull Request builds and define additional environment variables for your build. [Check out our detailed guide](https://devcenter.bitrise.io/api/build-trigger/).
     * @method
     * @name BitriseAPI#build_trigger
     * @param {string} appSlug - App slug
     * @param {} buildParams - Build trigger parameters
     */
    async build_trigger(parameters: {
        'appSlug': string,
        'buildParams': v0_BuildTriggerParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildTriggerRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['buildParams'] !== undefined) {
            requestBody = parameters['buildParams'];
        }

        if (!parameters['buildParams']) {
            throw new Error('Missing required  parameter: buildParams');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get the specified build of a given Bitrise app. You need to provide both an app slug and a build slug. You can get the build slug either by calling the [/builds](https://api-docs.bitrise.io/#/builds/build-list) endpoint or by clicking on the build on bitrise.io and copying the slug from the URL. The endpoint returns all the relevant data of the build.
     * @method
     * @name BitriseAPI#build_show
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     */
    async build_show(parameters: {
        'appSlug': string,
        'buildSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildShowResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Abort a specific build. Set an abort reason with the `abort_reason` parameter. Use the `abort_with_success` parameter to abort a build but still count it as a successful one.
     * @method
     * @name BitriseAPI#build_abort
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     * @param {} buildAbortParams - Build abort parameters
     */
    async build_abort(parameters: {
        'appSlug': string,
        'buildSlug': string,
        'buildAbortParams': v0_BuildAbortParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildAbortResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 429, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}/abort';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        if (parameters['buildAbortParams'] !== undefined) {
            requestBody = parameters['buildAbortParams'];
        }

        if (!parameters['buildAbortParams']) {
            throw new Error('Missing required  parameter: buildAbortParams');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all build artifacts that have been generated for an app's build. You can use the created build artifact slugs from the response output to retrieve data of a specific build artifact with the [GET/apps/](https://api-docs.bitrise.io/#/build-artifact/artifact-show) endpoint or update a build artifact with the [PATCH/apps](https://api-docs.bitrise.io/#/build-artifact/artifact-update) endpoint.
     * @method
     * @name BitriseAPI#artifact_list
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     * @param {string} next - Slug of the first build artifact in the response
     * @param {integer} limit - Max number of build artifacts per page is 50.
     */
    async artifact_list(parameters: {
        'appSlug': string,
        'buildSlug': string,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ArtifactListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}/artifacts';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Retrieve data of a specific build artifact. The response output contains a time-limited download url (expires in 10 minutes) and a public install page URL. You can view the build artifact with both URLs, but the public install page url will not work unless you [enable it](https://devcenter.bitrise.io/tutorials/deploy/bitrise-app-deployment/#enabling-public-page-for-the-app).
     * @method
     * @name BitriseAPI#artifact_show
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     * @param {string} artifactSlug - Artifact slug
     */
    async artifact_show(parameters: {
        'appSlug': string,
        'buildSlug': string,
        'artifactSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ArtifactShowResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        path = path.replace(
            '{artifact-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['artifactSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['artifactSlug']) {
            throw new Error('Missing required  parameter: artifactSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Delete a build artifact of an app's build. The required parameters are app slug, build slug and artifact slug. You can fetch the build artifact slug if you first list all build artifacts of an app with the [/apps/](https://api-docs.bitrise.io/#/build-artifact/artifact-list) endpoint.
     * @method
     * @name BitriseAPI#artifact_delete
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     * @param {string} artifactSlug - Artifact slug
     */
    async artifact_delete(parameters: {
        'appSlug': string,
        'buildSlug': string,
        'artifactSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ArtifactDeleteResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        path = path.replace(
            '{artifact-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['artifactSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['artifactSlug']) {
            throw new Error('Missing required  parameter: artifactSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('DELETE', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Update the `is_public_page_enabled` attribute of your app's build. The required parameters are app slug, build slug and artifact slug. You can fetch the build artifact slug if you first list all build artifacts of an app with the [GET /apps/](https://api-docs.bitrise.io/#/build-artifact/artifact-list) endpoint.
     * @method
     * @name BitriseAPI#artifact_update
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     * @param {string} artifactSlug - Artifact slug
     * @param {} artifactParams - Artifact parameters
     */
    async artifact_update(parameters: {
        'appSlug': string,
        'buildSlug': string,
        'artifactSlug': string,
        'artifactParams': v0_ArtifactUpdateParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ArtifactShowResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}/artifacts/{artifact-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        path = path.replace(
            '{artifact-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['artifactSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['artifactSlug']) {
            throw new Error('Missing required  parameter: artifactSlug');
        }

        if (parameters['artifactParams'] !== undefined) {
            requestBody = parameters['artifactParams'];
        }

        if (!parameters['artifactParams']) {
            throw new Error('Missing required  parameter: artifactParams');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('PATCH', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get the bitrise.yml file of one of the builds of a given app. This will return the `bitrise.yml` configuration with which the build ran. You can compare it to [the current bitrise.yml configuration](https://api-docs.bitrise.io/#/application/app-config-datastore-show) of the app.
     * @method
     * @name BitriseAPI#build_bitrise_yml_show
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     */
    async build_bitrise_yml_show(parameters: {
        'appSlug': string,
        'buildSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_build_bitrise_yml_show_200 > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}/bitrise.yml';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'text/plain';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get the build log of a specified build of a Bitrise app. You can get the build slug either by calling the [/builds](https://api-docs.bitrise.io/#/builds/build-list) endpoint or by clicking on the build on bitrise.io and copying the slug from the URL.
     * @method
     * @name BitriseAPI#build_log
     * @param {string} appSlug - App slug
     * @param {string} buildSlug - Build slug
     */
    async build_log(parameters: {
        'appSlug': string,
        'buildSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildLogInfoResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/builds/{build-slug}/log';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{build-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['buildSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['buildSlug']) {
            throw new Error('Missing required  parameter: buildSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Save the application after registering it on Bitrise and registering an SSH key (and, optionally, adding a webhook). With this endpoint you can define the initial configuration, define application-level environment variables, determine the project type, and set an Organization to be the owner of the app. Read more about the app registration process in our [detailed guide](https://devcenter.bitrise.io/api/adding-and-managing-apps/#adding-a-new-app).
     * @method
     * @name BitriseAPI#app_finish
     * @param {string} appSlug - App slug
     * @param {} app - App finish parameters
     */
    async app_finish(parameters: {
        'appSlug': string,
        'app': v0_AppFinishParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppFinishRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/finish';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['app'] !== undefined) {
            requestBody = parameters['app'];
        }

        if (!parameters['app']) {
            throw new Error('Missing required  parameter: app');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the generic project files that have been uploaded to a specific app. Read more in our [Listing the uploaded files of an app](https://devcenter.bitrise.io/api/managing-files-in-generic-file-storage/#listing-the-uploaded-files-of-an-app) guide.
     * @method
     * @name BitriseAPI#generic_project_file_list
     * @param {string} appSlug - App slug
     * @param {string} next - Slug of the first generic project file in the response
     * @param {integer} limit - Max number of build certificates per page is 50.
     */
    async generic_project_file_list(parameters: {
        'appSlug': string,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProjectFileStorageListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/generic-project-files';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Create a temporary pre-signed upload URL (expires in 10 minutes) for the generic project file and upload it to AWS with a simple `curl` request. To complete the uploading process and view your files on the Code Signing tab of your app, continue with the [POST /apps/{app-slug}/generic-project-files/{generic-project-file-slug}/uploaded](https://api-docs.bitrise.io/#/generic-project-file/generic-project-file-confirm) endpoint. Read more in our [Creating and uploading files to Generic File Storage](https://devcenter.bitrise.io/api/managing-files-in-generic-file-storage/#creating-and-uploading-files-to-generic-file-storage) guide.
     * @method
     * @name BitriseAPI#generic_project_files_create
     * @param {string} appSlug - App slug
     * @param {} genericProjectFile - Generic project file parameters
     */
    async generic_project_files_create(parameters: {
        'appSlug': string,
        'genericProjectFile': v0_ProjectFileStorageUploadParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, v0_ProjectFileStorageResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/generic-project-files';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['genericProjectFile'] !== undefined) {
            requestBody = parameters['genericProjectFile'];
        }

        if (!parameters['genericProjectFile']) {
            throw new Error('Missing required  parameter: genericProjectFile');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Retrieve data of a specific generic project file to check its attributes and optionally modify them with the [PATCH /apps/](https://api-docs.bitrise.io/#/generic-project-file/generic-project-file-update) endpoint. Read more in our [Retrieving a specific file's data](https://devcenter.bitrise.io/api/managing-files-in-generic-file-storage/#retrieving-a-specific-files-data) guide.
     * @method
     * @name BitriseAPI#generic_project_file_show
     * @param {string} appSlug - App slug
     * @param {string} genericProjectFileSlug - Generic project file slug
     */
    async generic_project_file_show(parameters: {
        'appSlug': string,
        'genericProjectFileSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProjectFileStorageResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/generic-project-files/{generic-project-file-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{generic-project-file-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['genericProjectFileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['genericProjectFileSlug']) {
            throw new Error('Missing required  parameter: genericProjectFileSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Delete an app's generic project file. You can fetch an app's generic project file slug if you first list all the uploaded files with the [GET /apps/{app-slug}/generic-project-files](https://api-docs.bitrise.io/#/generic-project-file/generic-project-file-list) endpoint. Read more in our [Deleting a file](https://devcenter.bitrise.io/api/managing-files-in-generic-file-storage/#deleting-a-file) guide.
     * @method
     * @name BitriseAPI#generic_project_file_delete
     * @param {string} appSlug - App slug
     * @param {string} genericProjectFileSlug - Generic project file slug
     */
    async generic_project_file_delete(parameters: {
        'appSlug': string,
        'genericProjectFileSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProjectFileStorageResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/generic-project-files/{generic-project-file-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{generic-project-file-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['genericProjectFileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['genericProjectFileSlug']) {
            throw new Error('Missing required  parameter: genericProjectFileSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('DELETE', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Update a generic project file's attributes. You can fetch an app's generic project file slug if you first list all the uploaded files with the [GET /apps/{app-slug}/generic-project-files](https://api-docs.bitrise.io/#/generic-project-file/generic-project-file-list) endpoint. Read more in our [Updating an uploaded file](https://devcenter.bitrise.io/api/managing-files-in-generic-file-storage/#updating-an-uploaded-file) guide.
     * @method
     * @name BitriseAPI#generic_project_file_update
     * @param {string} appSlug - App slug
     * @param {string} genericProjectFileSlug - Generic project file slug
     * @param {} genericProjectFile - Generic project file parameters
     */
    async generic_project_file_update(parameters: {
        'appSlug': string,
        'genericProjectFileSlug': string,
        'genericProjectFile': v0_ProjectFileStorageDocumentUpdateParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProjectFileStorageResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/generic-project-files/{generic-project-file-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{generic-project-file-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['genericProjectFileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['genericProjectFileSlug']) {
            throw new Error('Missing required  parameter: genericProjectFileSlug');
        }

        if (parameters['genericProjectFile'] !== undefined) {
            requestBody = parameters['genericProjectFile'];
        }

        if (!parameters['genericProjectFile']) {
            throw new Error('Missing required  parameter: genericProjectFile');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('PATCH', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * This is the last step of uploading a generic project file to Bitrise. Confirm the generic project file upload and view the file on the Code Signing tab of a specific app. Read more in our [Confirming the upload](https://devcenter.bitrise.io/api/managing-files-in-generic-file-storage/#confirming-the-file-upload) guide.
     * @method
     * @name BitriseAPI#generic_project_file_confirm
     * @param {string} appSlug - App slug
     * @param {string} genericProjectFileSlug - Generic project file slug
     */
    async generic_project_file_confirm(parameters: {
        'appSlug': string,
        'genericProjectFileSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProjectFileStorageResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/generic-project-files/{generic-project-file-slug}/uploaded';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{generic-project-file-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['genericProjectFileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['genericProjectFileSlug']) {
            throw new Error('Missing required  parameter: genericProjectFileSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the outgoing webhooks registered for a specified Bitrise app. This returns all the relevant data of the webhook, including the slug of the webhook and its URL.
     * @method
     * @name BitriseAPI#outgoing_webhook_list
     * @param {string} appSlug - App slug
     * @param {string} next - Slug of the first webhook in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async outgoing_webhook_list(parameters: {
        'appSlug': string,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppWebhookListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/outgoing-webhooks';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Create an outgoing webhook for a specified Bitrise app: this can be used to send build events to a specified URL with custom headers. Currently, only build events can trigger outgoing webhooks.
     * @method
     * @name BitriseAPI#outgoing_webhook_create
     * @param {string} appSlug - App slug
     * @param {} appWebhookCreateParams - App webhook creation params
     */
    async outgoing_webhook_create(parameters: {
        'appSlug': string,
        'appWebhookCreateParams': v0_AppWebhookCreateParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppWebhookCreatedResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/outgoing-webhooks';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['appWebhookCreateParams'] !== undefined) {
            requestBody = parameters['appWebhookCreateParams'];
        }

        if (!parameters['appWebhookCreateParams']) {
            throw new Error('Missing required  parameter: appWebhookCreateParams');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Update an existing outgoing webhook (URL, events, secrets and headers) for a specified Bitrise app. Even if you do not want to change one of the parameters, you still have to provide that parameter as well: simply use its existing value.
     * @method
     * @name BitriseAPI#outgoing_webhook_update
     * @param {string} appSlug - App slug
     * @param {string} appWebhookSlug - App webhook slug
     * @param {} appWebhookUpdateParams - App webhook update params
     */
    async outgoing_webhook_update(parameters: {
        'appSlug': string,
        'appWebhookSlug': string,
        'appWebhookUpdateParams': v0_AppWebhookUpdateParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppWebhookResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/outgoing-webhooks/{app-webhook-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{app-webhook-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appWebhookSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appWebhookSlug']) {
            throw new Error('Missing required  parameter: appWebhookSlug');
        }

        if (parameters['appWebhookUpdateParams'] !== undefined) {
            requestBody = parameters['appWebhookUpdateParams'];
        }

        if (!parameters['appWebhookUpdateParams']) {
            throw new Error('Missing required  parameter: appWebhookUpdateParams');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('PUT', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Delete an existing outgoing webhook for a specified Bitrise app.
     * @method
     * @name BitriseAPI#outgoing_webhook_delete
     * @param {string} appSlug - App slug
     * @param {string} appWebhookSlug - App webhook slug
     */
    async outgoing_webhook_delete(parameters: {
        'appSlug': string,
        'appWebhookSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppWebhookDeletedResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/outgoing-webhooks/{app-webhook-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{app-webhook-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appWebhookSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appWebhookSlug']) {
            throw new Error('Missing required  parameter: appWebhookSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('DELETE', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the delivery items of an outgoing webhook of a Bitrise application
     * @method
     * @name BitriseAPI#webhook_delivery_item_list
     * @param {string} appSlug - App slug
     * @param {string} appWebhookSlug - App webhook slug
     * @param {string} next - Slug of the first delivery item in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async webhook_delivery_item_list(parameters: {
        'appSlug': string,
        'appWebhookSlug': string,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_WebhookDeliveryItemShowResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/outgoing-webhooks/{app-webhook-slug}/delivery-items';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{app-webhook-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appWebhookSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appWebhookSlug']) {
            throw new Error('Missing required  parameter: appWebhookSlug');
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get the specified delivery item of an outgoing webhook of a Bitrise application
     * @method
     * @name BitriseAPI#webhook_delivery_item_show
     * @param {string} appSlug - App slug
     * @param {string} appWebhookSlug - App webhook slug
     * @param {string} webhookDeliveryItemSlug - Webhook delivery item slug
     */
    async webhook_delivery_item_show(parameters: {
        'appSlug': string,
        'appWebhookSlug': string,
        'webhookDeliveryItemSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_WebhookDeliveryItemResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/outgoing-webhooks/{app-webhook-slug}/delivery-items/{webhook-delivery-item-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{app-webhook-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appWebhookSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appWebhookSlug']) {
            throw new Error('Missing required  parameter: appWebhookSlug');
        }

        path = path.replace(
            '{webhook-delivery-item-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['webhookDeliveryItemSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['webhookDeliveryItemSlug']) {
            throw new Error('Missing required  parameter: webhookDeliveryItemSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Re-deliver the delivery item of a specified webhook of a Bitrise application
     * @method
     * @name BitriseAPI#webhook_delivery_item_redeliver
     * @param {string} appSlug - App slug
     * @param {string} appWebhookSlug - App webhook slug
     * @param {string} webhookDeliveryItemSlug - Webhook delivery item slug
     */
    async webhook_delivery_item_redeliver(parameters: {
        'appSlug': string,
        'appWebhookSlug': string,
        'webhookDeliveryItemSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, service_StandardErrorRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/outgoing-webhooks/{app-webhook-slug}/delivery-items/{webhook-delivery-item-slug}/redeliver';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{app-webhook-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appWebhookSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appWebhookSlug']) {
            throw new Error('Missing required  parameter: appWebhookSlug');
        }

        path = path.replace(
            '{webhook-delivery-item-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['webhookDeliveryItemSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['webhookDeliveryItemSlug']) {
            throw new Error('Missing required  parameter: webhookDeliveryItemSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the provisioning profiles that have been uploaded to a specific app. Read more in our [Listing the uploaded iOS code signing files of an app](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#listing-the-uploaded-ios-code-signing-files-of-an-app) guide.
     * @method
     * @name BitriseAPI#provisioning_profile_list
     * @param {string} appSlug - App slug
     * @param {string} next - Slug of the first provisioning profile in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async provisioning_profile_list(parameters: {
        'appSlug': string,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProvisionProfileListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/provisioning-profiles';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Create a temporary pre-signed upload URL (expires in 10 minutes) for the provisioning profile and upload it to AWS with a simple `curl` request. To complete the upload process, continue with the [POST /apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}/uploaded](https://api-docs.bitrise.io/#/provisioning-profile/provisioning-profile-confirm) endpoint. Read more in our [Creating and uploading an iOS code signing file](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#creating--uploading-an-ios-code-signing-file) guide.
     * @method
     * @name BitriseAPI#provisioning_profile_create
     * @param {string} appSlug - App slug
     * @param {} provisioningProfile - Provisioning profile parameters such as file name and file size
     */
    async provisioning_profile_create(parameters: {
        'appSlug': string,
        'provisioningProfile': v0_ProvisionProfileUploadParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, v0_ProvisionProfileResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/provisioning-profiles';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['provisioningProfile'] !== undefined) {
            requestBody = parameters['provisioningProfile'];
        }

        if (!parameters['provisioningProfile']) {
            throw new Error('Missing required  parameter: provisioningProfile');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Retrieve data of a specific provisioning profile. You can fetch the provisioning profile's slug if you call the [GET /apps/{app-slug}/provisioning-profiles](https://api-docs.bitrise.io/#/provisioning-profile/provisioning-profile-list) endpoint. Read more in our [Getting a specific iOS code signing file's data](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#getting-a-specific-ios-code-signing-files-data) guide.
     * @method
     * @name BitriseAPI#provisioning_profile_show
     * @param {string} appSlug - App slug
     * @param {string} provisioningProfileSlug - Provisioning profile slug
     */
    async provisioning_profile_show(parameters: {
        'appSlug': string,
        'provisioningProfileSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProvisionProfileResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{provisioning-profile-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['provisioningProfileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['provisioningProfileSlug']) {
            throw new Error('Missing required  parameter: provisioningProfileSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Delete an app's provisioning profile. You can fetch the provisioning profile's slug if you call the [GET /apps/{app-slug}/provisioning-profiles](https://api-docs.bitrise.io/#/provisioning-profile/provisioning-profile-list) endpoint. Read more in our [Deleting an iOS code signing file](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#deleting-an-ios-code-signing-file) guide.
     * @method
     * @name BitriseAPI#provisioning_profile_delete
     * @param {string} appSlug - App slug
     * @param {string} provisioningProfileSlug - Provisioning profile slug
     */
    async provisioning_profile_delete(parameters: {
        'appSlug': string,
        'provisioningProfileSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProvisionProfileResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{provisioning-profile-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['provisioningProfileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['provisioningProfileSlug']) {
            throw new Error('Missing required  parameter: provisioningProfileSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('DELETE', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Update an uploaded provisioning profile's attributes. You can fetch the provisioning profile's slug if you call the [GET /apps/{app-slug}/provisioning-profiles](https://api-docs.bitrise.io/#/provisioning-profile/provisioning-profile-list) endpoint. Read more in our [Updating an uploaded iOS code signing file](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#confirming-the-ios-code-signing-file-upload) guide.
     * @method
     * @name BitriseAPI#provisioning_profile_update
     * @param {string} appSlug - App slug
     * @param {string} provisioningProfileSlug - Provisioning profile slug
     * @param {} provisioningProfile - Provisioning profile parameters
     */
    async provisioning_profile_update(parameters: {
        'appSlug': string,
        'provisioningProfileSlug': string,
        'provisioningProfile': v0_ProvProfileDocumentUpdateParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProvisionProfileResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{provisioning-profile-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['provisioningProfileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['provisioningProfileSlug']) {
            throw new Error('Missing required  parameter: provisioningProfileSlug');
        }

        if (parameters['provisioningProfile'] !== undefined) {
            requestBody = parameters['provisioningProfile'];
        }

        if (!parameters['provisioningProfile']) {
            throw new Error('Missing required  parameter: provisioningProfile');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('PATCH', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * This is the last step of the upload process. Confirm the provisioning profile upload and view the file on the Code Signing tab of a specific app. Read more in our [Confirming the iOS code signing file upload](https://devcenter.bitrise.io/api/managing-ios-code-signing-files/#confirming-the-ios-code-signing-file-upload) guide.
     * @method
     * @name BitriseAPI#provisioning_profile_confirm
     * @param {string} appSlug - App slug
     * @param {string} provisioningProfileSlug - Provisioning profile slug
     */
    async provisioning_profile_confirm(parameters: {
        'appSlug': string,
        'provisioningProfileSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ProvisionProfileResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/provisioning-profiles/{provisioning-profile-slug}/uploaded';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        path = path.replace(
            '{provisioning-profile-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['provisioningProfileSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['provisioningProfileSlug']) {
            throw new Error('Missing required  parameter: provisioningProfileSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Add an SSH-key to a specific app. After creating an app, you need to register the SSH key so that Bitrise will be able to access and clone your repository during the build process. This requires the app slug of your newly created app.
     * @method
     * @name BitriseAPI#ssh_key_create
     * @param {string} appSlug - App slug
     * @param {} sshKey - SSH key parameters
     */
    async ssh_key_create(parameters: {
        'appSlug': string,
        'sshKey': v0_SSHKeyUploadParams,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_SSHKeyRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/register-ssh-key';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters['sshKey'] !== undefined) {
            requestBody = parameters['sshKey'];
        }

        if (!parameters['sshKey']) {
            throw new Error('Missing required  parameter: sshKey');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * [Register an incoming webhook](https://devcenter.bitrise.io/api/incoming-and-outgoing-webhooks/#incoming-webhooks) for a specific application. You can do this during the app registration process or at any other time in an app's life. When calling this endpoint, a webhook is registered at your git provider: this is necessary to automatically trigger builds on Bitrise.
     * @method
     * @name BitriseAPI#app_webhook_create
     * @param {string} appSlug - App slug
     */
    async app_webhook_create(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_WebhookRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/register-webhook';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        const response = await this.request('POST', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List registered test devices of all members of a specified Bitrise app
     * @method
     * @name BitriseAPI#test_device_list
     * @param {string} appSlug - App slug
     */
    async test_device_list(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_TestDeviceListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/apps/{app-slug}/test-devices';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the Bitrise builds that can be accessed with the authenticated account. Filter builds based on their owner, using the owner slug, or the status of the build.
     * @method
     * @name BitriseAPI#build_list_all
     * @param {string} ownerSlug - The slug of the owner of the app or apps
     * @param {boolean} isOnHold - Indicates whether the build has started yet (true: the build hasn't started)
     * @param {integer} status - The status of the build: not finished (0), successful (1), failed (2), aborted with failure (3), aborted with success (4)
     * @param {string} next - Slug of the first build in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async build_list_all(parameters: {
        'ownerSlug' ? : string,
        'isOnHold' ? : boolean,
        'status' ? : number,
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_BuildListAllResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/builds';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        if (parameters['ownerSlug'] !== undefined) {
            queryParameters['owner_slug'] = this.convertParameterCollectionFormat(
                parameters['ownerSlug'],
                ''
            );
        }

        if (parameters['isOnHold'] !== undefined) {
            queryParameters['is_on_hold'] = this.convertParameterCollectionFormat(
                parameters['isOnHold'],
                ''
            );
        }

        if (parameters['status'] !== undefined) {
            queryParameters['status'] = this.convertParameterCollectionFormat(
                parameters['status'],
                ''
            );
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Shows the authenticated users profile data
     * @method
     * @name BitriseAPI#user_profile
     */
    async user_profile(parameters: {} & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_UserProfileRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/me';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the Bitrise activity events
     * @method
     * @name BitriseAPI#activity_list
     * @param {string} next - Slug of the first activity event in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async activity_list(parameters: {
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_ActivityEventListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/me/activities';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get the subscription of the user: the current plan, any pending plans, and the duration of a trial period if applicable
     * @method
     * @name BitriseAPI#user_plan
     */
    async user_plan(parameters: {} & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_UserPlanRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/me/plan';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all Bitrise organizations that the user is part of
     * @method
     * @name BitriseAPI#org_list
     */
    async org_list(parameters: {} & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_OrganizationListRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/organizations';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Get a specified Bitrise organization that the user is part of.
     * @method
     * @name BitriseAPI#org_show
     * @param {string} orgSlug - The organization slug
     */
    async org_show(parameters: {
        'orgSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_OrganizationRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/organizations/{org-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{org-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['orgSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['orgSlug']) {
            throw new Error('Missing required  parameter: orgSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the available apps owned by a given organization. [Find the organization URL](https://devcenter.bitrise.io/team-management/organizations/org-url/) of the organisations you are part of; be aware that the endpoint will not return any apps if the authenticated account is not a member of the given organisation.
     * @method
     * @name BitriseAPI#app_list_by_organization
     * @param {string} orgSlug - Organization slug
     * @param {string} sortBy - Order of applications: sort them based on when they were created or the time of their last build
     * @param {string} next - Slug of the first app in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async app_list_by_organization(parameters: {
        'orgSlug': string,
        'sortBy' ? : "last_build_at" | "created_at",
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/organizations/{org-slug}/apps';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{org-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['orgSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['orgSlug']) {
            throw new Error('Missing required  parameter: orgSlug');
        }

        if (parameters['sortBy'] !== undefined) {
            queryParameters['sort_by'] = this.convertParameterCollectionFormat(
                parameters['sortBy'],
                ''
            );
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the provisioned addons for organization
     * @method
     * @name BitriseAPI#addon_list_by_organization
     * @param {string} organizationSlug - Organization slug
     */
    async addon_list_by_organization(parameters: {
        'organizationSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_OwnerAddOnsListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/organizations/{organization-slug}/addons';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{organization-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['organizationSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['organizationSlug']) {
            throw new Error('Missing required  parameter: organizationSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * Show information about a specific user
     * @method
     * @name BitriseAPI#user_show
     * @param {string} userSlug - User slug
     */
    async user_show(parameters: {
        'userSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_UserProfileRespModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/users/{user-slug}';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{user-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['userSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['userSlug']) {
            throw new Error('Missing required  parameter: userSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the provisioned addons for the authenticated user
     * @method
     * @name BitriseAPI#addon_list_by_user
     * @param {string} userSlug - User slug
     */
    async addon_list_by_user(parameters: {
        'userSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_OwnerAddOnsListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/users/{user-slug}/addons';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{user-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['userSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['userSlug']) {
            throw new Error('Missing required  parameter: userSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List Apple API credentials for a specific Bitrise user
     * @method
     * @name BitriseAPI#apple_api_credential_list
     * @param {string} userSlug - User slug
     */
    async apple_api_credential_list(parameters: {
        'userSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppleAPICredentialsListResponse > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/users/{user-slug}/apple-api-credentials';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{user-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['userSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['userSlug']) {
            throw new Error('Missing required  parameter: userSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all the available apps for the given user.  It needs the user slug that you can get from the [GET /me](https://api-docs.bitrise.io/#/user/user-profile) endpoint.
     * @method
     * @name BitriseAPI#app_list_by_user
     * @param {string} userSlug - User slug
     * @param {string} sortBy - Order of applications
     * @param {string} next - Slug of the first app in the response
     * @param {integer} limit - Max number of elements per page (default: 50)
     */
    async app_list_by_user(parameters: {
        'userSlug': string,
        'sortBy' ? : "last_build_at" | "created_at",
        'next' ? : string,
        'limit' ? : number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_AppListResponseModel > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/users/{user-slug}/apps';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';

        path = path.replace(
            '{user-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['userSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['userSlug']) {
            throw new Error('Missing required  parameter: userSlug');
        }

        if (parameters['sortBy'] !== undefined) {
            queryParameters['sort_by'] = this.convertParameterCollectionFormat(
                parameters['sortBy'],
                ''
            );
        }

        if (parameters['next'] !== undefined) {
            queryParameters['next'] = this.convertParameterCollectionFormat(
                parameters['next'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
    /**
     * List all available avatar candidates for an application
     * @method
     * @name BitriseAPI#avatar_candidate_list
     * @param {string} appSlug - App slug
     */
    async avatar_candidate_list(parameters: {
        'appSlug': string,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, v0_FindAvatarCandidateResponse > | ResponseWithBody < 400, service_StandardErrorRespModel > | ResponseWithBody < 401, service_StandardErrorRespModel > | ResponseWithBody < 404, service_StandardErrorRespModel > | ResponseWithBody < 500, service_StandardErrorRespModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v0.1/apps/{app-slug}/avatar-candidates';

        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let requestBody: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        path = path.replace(
            '{app-slug}',
            `${encodeURIComponent(this.convertParameterCollectionFormat(
                    parameters['appSlug'],
                    ''
                ).toString())}`
        );

        if (!parameters['appSlug']) {
            throw new Error('Missing required  parameter: appSlug');
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        const response = await this.request('GET', domain + path, requestBody, headers, queryParameters, parameters);
        const responseBody = await response.json();

        return {
            body: responseBody,
            status: < any > response.status
        };
    }
}

export default BitriseAPI;