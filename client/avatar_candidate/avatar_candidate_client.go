// Code generated by go-swagger; DO NOT EDIT.

package avatar_candidate

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"
)

// New creates a new avatar candidate API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) *Client {
	return &Client{transport: transport, formats: formats}
}

/*
Client for avatar candidate API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

/*
AvatarCandidateCreate creates avatar candidates

Add new avatar candidates to a specific app
*/
func (a *Client) AvatarCandidateCreate(params *AvatarCandidateCreateParams, authInfo runtime.ClientAuthInfoWriter) (*AvatarCandidateCreateCreated, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAvatarCandidateCreateParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "avatar-candidate-create",
		Method:             "POST",
		PathPattern:        "/apps/{app-slug}/avatar-candidates",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AvatarCandidateCreateReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	return result.(*AvatarCandidateCreateCreated), nil

}

/*
AvatarCandidateList gets list of the avatar candidates

List all available avatar candidates for an application
*/
func (a *Client) AvatarCandidateList(params *AvatarCandidateListParams, authInfo runtime.ClientAuthInfoWriter) (*AvatarCandidateListOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAvatarCandidateListParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "avatar-candidate-list",
		Method:             "GET",
		PathPattern:        "/v0.1/apps/{app-slug}/avatar-candidates",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AvatarCandidateListReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	return result.(*AvatarCandidateListOK), nil

}

/*
AvatarCandidatePromote promotes an avatar candidate

Promotes an avatar candidate for an app
*/
func (a *Client) AvatarCandidatePromote(params *AvatarCandidatePromoteParams, authInfo runtime.ClientAuthInfoWriter) (*AvatarCandidatePromoteOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAvatarCandidatePromoteParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "avatar-candidate-promote",
		Method:             "PATCH",
		PathPattern:        "/apps/{app-slug}/avatar-candidates/{avatar-slug}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AvatarCandidatePromoteReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	return result.(*AvatarCandidatePromoteOK), nil

}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}