// Code generated by go-swagger; DO NOT EDIT.

package client

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/bitrise-io/bitrise-api-client/client/activity"
	"github.com/bitrise-io/bitrise-api-client/client/addons"
	"github.com/bitrise-io/bitrise-api-client/client/android_keystore_file"
	"github.com/bitrise-io/bitrise-api-client/client/app_setup"
	"github.com/bitrise-io/bitrise-api-client/client/apple_api_credentials"
	"github.com/bitrise-io/bitrise-api-client/client/application"
	"github.com/bitrise-io/bitrise-api-client/client/avatar_candidate"
	"github.com/bitrise-io/bitrise-api-client/client/build_artifact"
	"github.com/bitrise-io/bitrise-api-client/client/build_certificate"
	"github.com/bitrise-io/bitrise-api-client/client/build_request"
	"github.com/bitrise-io/bitrise-api-client/client/builds"
	"github.com/bitrise-io/bitrise-api-client/client/generic_project_file"
	"github.com/bitrise-io/bitrise-api-client/client/organizations"
	"github.com/bitrise-io/bitrise-api-client/client/outgoing_webhook"
	"github.com/bitrise-io/bitrise-api-client/client/provisioning_profile"
	"github.com/bitrise-io/bitrise-api-client/client/test_devices"
	"github.com/bitrise-io/bitrise-api-client/client/user"
	"github.com/bitrise-io/bitrise-api-client/client/webhook_delivery_item"
	"github.com/go-openapi/runtime"
	httptransport "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
)

// Default bitrise HTTP client.
var Default = NewHTTPClient(nil)

const (
	// DefaultHost is the default Host
	// found in Meta (info) section of spec file
	DefaultHost string = "api.bitrise.io"
	// DefaultBasePath is the default BasePath
	// found in Meta (info) section of spec file
	DefaultBasePath string = "/v0.1"
)

// DefaultSchemes are the default schemes found in Meta (info) section of spec file
var DefaultSchemes = []string{"https"}

// NewHTTPClient creates a new bitrise HTTP client.
func NewHTTPClient(formats strfmt.Registry) *Bitrise {
	return NewHTTPClientWithConfig(formats, nil)
}

// NewHTTPClientWithConfig creates a new bitrise HTTP client,
// using a customizable transport config.
func NewHTTPClientWithConfig(formats strfmt.Registry, cfg *TransportConfig) *Bitrise {
	// ensure nullable parameters have default
	if cfg == nil {
		cfg = DefaultTransportConfig()
	}

	// create transport and client
	transport := httptransport.New(cfg.Host, cfg.BasePath, cfg.Schemes)
	return New(transport, formats)
}

// New creates a new bitrise client
func New(transport runtime.ClientTransport, formats strfmt.Registry) *Bitrise {
	// ensure nullable parameters have default
	if formats == nil {
		formats = strfmt.Default
	}

	cli := new(Bitrise)
	cli.Transport = transport
	cli.Activity = activity.New(transport, formats)
	cli.Addons = addons.New(transport, formats)
	cli.AndroidKeystoreFile = android_keystore_file.New(transport, formats)
	cli.AppSetup = app_setup.New(transport, formats)
	cli.AppleAPICredentials = apple_api_credentials.New(transport, formats)
	cli.Application = application.New(transport, formats)
	cli.AvatarCandidate = avatar_candidate.New(transport, formats)
	cli.BuildArtifact = build_artifact.New(transport, formats)
	cli.BuildCertificate = build_certificate.New(transport, formats)
	cli.BuildRequest = build_request.New(transport, formats)
	cli.Builds = builds.New(transport, formats)
	cli.GenericProjectFile = generic_project_file.New(transport, formats)
	cli.Organizations = organizations.New(transport, formats)
	cli.OutgoingWebhook = outgoing_webhook.New(transport, formats)
	cli.ProvisioningProfile = provisioning_profile.New(transport, formats)
	cli.TestDevices = test_devices.New(transport, formats)
	cli.User = user.New(transport, formats)
	cli.WebhookDeliveryItem = webhook_delivery_item.New(transport, formats)
	return cli
}

// DefaultTransportConfig creates a TransportConfig with the
// default settings taken from the meta section of the spec file.
func DefaultTransportConfig() *TransportConfig {
	return &TransportConfig{
		Host:     DefaultHost,
		BasePath: DefaultBasePath,
		Schemes:  DefaultSchemes,
	}
}

// TransportConfig contains the transport related info,
// found in the meta section of the spec file.
type TransportConfig struct {
	Host     string
	BasePath string
	Schemes  []string
}

// WithHost overrides the default host,
// provided by the meta section of the spec file.
func (cfg *TransportConfig) WithHost(host string) *TransportConfig {
	cfg.Host = host
	return cfg
}

// WithBasePath overrides the default basePath,
// provided by the meta section of the spec file.
func (cfg *TransportConfig) WithBasePath(basePath string) *TransportConfig {
	cfg.BasePath = basePath
	return cfg
}

// WithSchemes overrides the default schemes,
// provided by the meta section of the spec file.
func (cfg *TransportConfig) WithSchemes(schemes []string) *TransportConfig {
	cfg.Schemes = schemes
	return cfg
}

// Bitrise is a client for bitrise
type Bitrise struct {
	Activity activity.ClientService

	Addons addons.ClientService

	AndroidKeystoreFile android_keystore_file.ClientService

	AppSetup app_setup.ClientService

	AppleAPICredentials apple_api_credentials.ClientService

	Application application.ClientService

	AvatarCandidate avatar_candidate.ClientService

	BuildArtifact build_artifact.ClientService

	BuildCertificate build_certificate.ClientService

	BuildRequest build_request.ClientService

	Builds builds.ClientService

	GenericProjectFile generic_project_file.ClientService

	Organizations organizations.ClientService

	OutgoingWebhook outgoing_webhook.ClientService

	ProvisioningProfile provisioning_profile.ClientService

	TestDevices test_devices.ClientService

	User user.ClientService

	WebhookDeliveryItem webhook_delivery_item.ClientService

	Transport runtime.ClientTransport
}

// SetTransport changes the transport on the client and all its subresources
func (c *Bitrise) SetTransport(transport runtime.ClientTransport) {
	c.Transport = transport
	c.Activity.SetTransport(transport)
	c.Addons.SetTransport(transport)
	c.AndroidKeystoreFile.SetTransport(transport)
	c.AppSetup.SetTransport(transport)
	c.AppleAPICredentials.SetTransport(transport)
	c.Application.SetTransport(transport)
	c.AvatarCandidate.SetTransport(transport)
	c.BuildArtifact.SetTransport(transport)
	c.BuildCertificate.SetTransport(transport)
	c.BuildRequest.SetTransport(transport)
	c.Builds.SetTransport(transport)
	c.GenericProjectFile.SetTransport(transport)
	c.Organizations.SetTransport(transport)
	c.OutgoingWebhook.SetTransport(transport)
	c.ProvisioningProfile.SetTransport(transport)
	c.TestDevices.SetTransport(transport)
	c.User.SetTransport(transport)
	c.WebhookDeliveryItem.SetTransport(transport)
}
