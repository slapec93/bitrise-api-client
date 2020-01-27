// Code generated by go-swagger; DO NOT EDIT.

package app_setup

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/bitrise-io/bitrise-api-client/models"
)

// NewAppConfigCreateParams creates a new AppConfigCreateParams object
// with the default values initialized.
func NewAppConfigCreateParams() *AppConfigCreateParams {
	var ()
	return &AppConfigCreateParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewAppConfigCreateParamsWithTimeout creates a new AppConfigCreateParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewAppConfigCreateParamsWithTimeout(timeout time.Duration) *AppConfigCreateParams {
	var ()
	return &AppConfigCreateParams{

		timeout: timeout,
	}
}

// NewAppConfigCreateParamsWithContext creates a new AppConfigCreateParams object
// with the default values initialized, and the ability to set a context for a request
func NewAppConfigCreateParamsWithContext(ctx context.Context) *AppConfigCreateParams {
	var ()
	return &AppConfigCreateParams{

		Context: ctx,
	}
}

// NewAppConfigCreateParamsWithHTTPClient creates a new AppConfigCreateParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewAppConfigCreateParamsWithHTTPClient(client *http.Client) *AppConfigCreateParams {
	var ()
	return &AppConfigCreateParams{
		HTTPClient: client,
	}
}

/*AppConfigCreateParams contains all the parameters to send to the API endpoint
for the app config create operation typically these are written to a http.Request
*/
type AppConfigCreateParams struct {

	/*AppConfig
	  App config parameters

	*/
	AppConfig *models.V0AppConfigRequestParam
	/*AppSlug
	  App slug

	*/
	AppSlug string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the app config create params
func (o *AppConfigCreateParams) WithTimeout(timeout time.Duration) *AppConfigCreateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the app config create params
func (o *AppConfigCreateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the app config create params
func (o *AppConfigCreateParams) WithContext(ctx context.Context) *AppConfigCreateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the app config create params
func (o *AppConfigCreateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the app config create params
func (o *AppConfigCreateParams) WithHTTPClient(client *http.Client) *AppConfigCreateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the app config create params
func (o *AppConfigCreateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppConfig adds the appConfig to the app config create params
func (o *AppConfigCreateParams) WithAppConfig(appConfig *models.V0AppConfigRequestParam) *AppConfigCreateParams {
	o.SetAppConfig(appConfig)
	return o
}

// SetAppConfig adds the appConfig to the app config create params
func (o *AppConfigCreateParams) SetAppConfig(appConfig *models.V0AppConfigRequestParam) {
	o.AppConfig = appConfig
}

// WithAppSlug adds the appSlug to the app config create params
func (o *AppConfigCreateParams) WithAppSlug(appSlug string) *AppConfigCreateParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the app config create params
func (o *AppConfigCreateParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WriteToRequest writes these params to a swagger request
func (o *AppConfigCreateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.AppConfig != nil {
		if err := r.SetBodyParam(o.AppConfig); err != nil {
			return err
		}
	}

	// path param app-slug
	if err := r.SetPathParam("app-slug", o.AppSlug); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
