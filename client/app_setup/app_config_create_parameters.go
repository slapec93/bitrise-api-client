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

	/*App
	  App config parameters

	*/
	App interface{}
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

// WithApp adds the app to the app config create params
func (o *AppConfigCreateParams) WithApp(app interface{}) *AppConfigCreateParams {
	o.SetApp(app)
	return o
}

// SetApp adds the app to the app config create params
func (o *AppConfigCreateParams) SetApp(app interface{}) {
	o.App = app
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

	if o.App != nil {
		if err := r.SetBodyParam(o.App); err != nil {
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
