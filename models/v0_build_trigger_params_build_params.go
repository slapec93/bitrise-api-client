// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// V0BuildTriggerParamsBuildParams v0 build trigger params build params
// swagger:model v0.BuildTriggerParamsBuildParams
type V0BuildTriggerParamsBuildParams struct {

	// branch
	Branch string `json:"branch,omitempty"`

	// branch dest
	BranchDest string `json:"branch_dest,omitempty"`

	// branch dest repo owner
	BranchDestRepoOwner string `json:"branch_dest_repo_owner,omitempty"`

	// branch repo owner
	BranchRepoOwner string `json:"branch_repo_owner,omitempty"`

	// build request slug
	BuildRequestSlug string `json:"build_request_slug,omitempty"`

	// commit hash
	CommitHash string `json:"commit_hash,omitempty"`

	// commit message
	CommitMessage string `json:"commit_message,omitempty"`

	// commit paths
	CommitPaths []string `json:"commit_paths"`

	// diff url
	DiffURL string `json:"diff_url,omitempty"`

	// environments
	Environments []*V0BuildParamsEnvironment `json:"environments"`

	// pull request author
	PullRequestAuthor string `json:"pull_request_author,omitempty"`

	// pull request head branch
	PullRequestHeadBranch string `json:"pull_request_head_branch,omitempty"`

	// pull request id
	PullRequestID int64 `json:"pull_request_id,omitempty"`

	// pull request merge branch
	PullRequestMergeBranch string `json:"pull_request_merge_branch,omitempty"`

	// pull request repository url
	PullRequestRepositoryURL string `json:"pull_request_repository_url,omitempty"`

	// skip git status report
	SkipGitStatusReport bool `json:"skip_git_status_report,omitempty"`

	// tag
	Tag string `json:"tag,omitempty"`

	// workflow id
	WorkflowID string `json:"workflow_id,omitempty"`
}

// Validate validates this v0 build trigger params build params
func (m *V0BuildTriggerParamsBuildParams) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateEnvironments(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V0BuildTriggerParamsBuildParams) validateEnvironments(formats strfmt.Registry) error {

	if swag.IsZero(m.Environments) { // not required
		return nil
	}

	for i := 0; i < len(m.Environments); i++ {
		if swag.IsZero(m.Environments[i]) { // not required
			continue
		}

		if m.Environments[i] != nil {
			if err := m.Environments[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("environments" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V0BuildTriggerParamsBuildParams) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0BuildTriggerParamsBuildParams) UnmarshalBinary(b []byte) error {
	var res V0BuildTriggerParamsBuildParams
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
