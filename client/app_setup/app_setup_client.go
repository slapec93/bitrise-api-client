// Code generated by go-swagger; DO NOT EDIT.

package app_setup

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new app setup API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for app setup API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientService is the interface for Client methods
type ClientService interface {
	AppConfigCreate(params *AppConfigCreateParams, authInfo runtime.ClientAuthInfoWriter) (*AppConfigCreateOK, error)

	AppCreate(params *AppCreateParams, authInfo runtime.ClientAuthInfoWriter) (*AppCreateOK, error)

	AppFinish(params *AppFinishParams, authInfo runtime.ClientAuthInfoWriter) (*AppFinishOK, error)

	AppWebhookCreate(params *AppWebhookCreateParams, authInfo runtime.ClientAuthInfoWriter) (*AppWebhookCreateOK, error)

	SSHKeyCreate(params *SSHKeyCreateParams, authInfo runtime.ClientAuthInfoWriter) (*SSHKeyCreateOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  AppConfigCreate uploads a new bitrise yml for your application

  Upload a new bitrise.yml for your application.
*/
func (a *Client) AppConfigCreate(params *AppConfigCreateParams, authInfo runtime.ClientAuthInfoWriter) (*AppConfigCreateOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAppConfigCreateParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "app-config-create",
		Method:             "POST",
		PathPattern:        "/apps/{app-slug}/bitrise.yml",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AppConfigCreateReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*AppConfigCreateOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for app-config-create: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  AppCreate adds a new app

  Add a new app to Bitrise. This is the first step of the app registration process. To successfully set it up, you need to provide the required app parameters: your git provider, the repository URL, the slug of the repository as it appears at the provider, and the slug of the owner of the repository. Read more about the app creation process in our [detailed guide](https://devcenter.bitrise.io/api/adding-and-managing-apps/#adding-a-new-app).
*/
func (a *Client) AppCreate(params *AppCreateParams, authInfo runtime.ClientAuthInfoWriter) (*AppCreateOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAppCreateParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "app-create",
		Method:             "POST",
		PathPattern:        "/apps/register",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AppCreateReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*AppCreateOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for app-create: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  AppFinish saves the application at the end of the app registration process

  Save the application after registering it on Bitrise and registering an SSH key (and, optionally, adding a webhook). With this endpoint you can define the initial configuration, define application-level environment variables, determine the project type, and set an Organization to be the owner of the app. Read more about the app registration process in our [detailed guide](https://devcenter.bitrise.io/api/adding-and-managing-apps/#adding-a-new-app).
*/
func (a *Client) AppFinish(params *AppFinishParams, authInfo runtime.ClientAuthInfoWriter) (*AppFinishOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAppFinishParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "app-finish",
		Method:             "POST",
		PathPattern:        "/apps/{app-slug}/finish",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AppFinishReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*AppFinishOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for app-finish: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  AppWebhookCreate registers an incoming webhook for a specific application

  [Register an incoming webhook](https://devcenter.bitrise.io/api/incoming-and-outgoing-webhooks/#incoming-webhooks) for a specific application. You can do this during the app registration process or at any other time in an app's life. When calling this endpoint, a webhook is registered at your git provider: this is necessary to automatically trigger builds on Bitrise.
*/
func (a *Client) AppWebhookCreate(params *AppWebhookCreateParams, authInfo runtime.ClientAuthInfoWriter) (*AppWebhookCreateOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAppWebhookCreateParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "app-webhook-create",
		Method:             "POST",
		PathPattern:        "/apps/{app-slug}/register-webhook",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AppWebhookCreateReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*AppWebhookCreateOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for app-webhook-create: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  SSHKeyCreate adds an SSH key to a specific app

  Add an SSH-key to a specific app. After creating an app, you need to register the SSH key so that Bitrise will be able to access and clone your repository during the build process. This requires the app slug of your newly created app.
*/
func (a *Client) SSHKeyCreate(params *SSHKeyCreateParams, authInfo runtime.ClientAuthInfoWriter) (*SSHKeyCreateOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewSSHKeyCreateParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ssh-key-create",
		Method:             "POST",
		PathPattern:        "/apps/{app-slug}/register-ssh-key",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &SSHKeyCreateReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*SSHKeyCreateOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for ssh-key-create: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
