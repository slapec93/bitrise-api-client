// Code generated by go-swagger; DO NOT EDIT.

package user

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new user API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for user API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientService is the interface for Client methods
type ClientService interface {
	UserPlan(params *UserPlanParams, authInfo runtime.ClientAuthInfoWriter) (*UserPlanOK, error)

	UserProfile(params *UserProfileParams, authInfo runtime.ClientAuthInfoWriter) (*UserProfileOK, error)

	UserShow(params *UserShowParams, authInfo runtime.ClientAuthInfoWriter) (*UserShowOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  UserPlan thes subscription plan of the user

  Get the subscription of the user: the current plan, any pending plans, and the duration of a trial period if applicable
*/
func (a *Client) UserPlan(params *UserPlanParams, authInfo runtime.ClientAuthInfoWriter) (*UserPlanOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUserPlanParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "user-plan",
		Method:             "GET",
		PathPattern:        "/me/plan",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &UserPlanReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*UserPlanOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for user-plan: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  UserProfile gets your profile data

  Shows the authenticated users profile data
*/
func (a *Client) UserProfile(params *UserProfileParams, authInfo runtime.ClientAuthInfoWriter) (*UserProfileOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUserProfileParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "user-profile",
		Method:             "GET",
		PathPattern:        "/me",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &UserProfileReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*UserProfileOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for user-profile: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  UserShow gets a specific user

  Show information about a specific user
*/
func (a *Client) UserShow(params *UserShowParams, authInfo runtime.ClientAuthInfoWriter) (*UserShowOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUserShowParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "user-show",
		Method:             "GET",
		PathPattern:        "/users/{user-slug}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &UserShowReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*UserShowOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for user-show: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
