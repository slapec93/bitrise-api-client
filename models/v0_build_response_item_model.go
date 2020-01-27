// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V0BuildResponseItemModel v0 build response item model
// swagger:model v0.BuildResponseItemModel
type V0BuildResponseItemModel struct {

	// abort reason
	AbortReason string `json:"abort_reason,omitempty"`

	// branch
	Branch string `json:"branch,omitempty"`

	// build number
	BuildNumber int64 `json:"build_number,omitempty"`

	// commit hash
	CommitHash string `json:"commit_hash,omitempty"`

	// commit message
	CommitMessage string `json:"commit_message,omitempty"`

	// commit view url
	CommitViewURL string `json:"commit_view_url,omitempty"`

	// environment prepare finished at
	EnvironmentPrepareFinishedAt string `json:"environment_prepare_finished_at,omitempty"`

	// finished at
	FinishedAt string `json:"finished_at,omitempty"`

	// is on hold
	IsOnHold bool `json:"is_on_hold,omitempty"`

	// machine type id
	MachineTypeID string `json:"machine_type_id,omitempty"`

	// original build params
	OriginalBuildParams string `json:"original_build_params,omitempty"`

	// pull request id
	PullRequestID int64 `json:"pull_request_id,omitempty"`

	// pull request target branch
	PullRequestTargetBranch string `json:"pull_request_target_branch,omitempty"`

	// pull request view url
	PullRequestViewURL string `json:"pull_request_view_url,omitempty"`

	// slug
	Slug string `json:"slug,omitempty"`

	// stack identifier
	StackIdentifier string `json:"stack_identifier,omitempty"`

	// started on worker at
	StartedOnWorkerAt string `json:"started_on_worker_at,omitempty"`

	// status
	Status int64 `json:"status,omitempty"`

	// status text
	StatusText string `json:"status_text,omitempty"`

	// tag
	Tag string `json:"tag,omitempty"`

	// triggered at
	TriggeredAt string `json:"triggered_at,omitempty"`

	// triggered by
	TriggeredBy string `json:"triggered_by,omitempty"`

	// triggered workflow
	TriggeredWorkflow string `json:"triggered_workflow,omitempty"`
}

// Validate validates this v0 build response item model
func (m *V0BuildResponseItemModel) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0BuildResponseItemModel) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0BuildResponseItemModel) UnmarshalBinary(b []byte) error {
	var res V0BuildResponseItemModel
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
