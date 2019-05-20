// Code generated by go-swagger; DO NOT EDIT.

package avatar_candidate

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

	models "github.com/slapec93/bitrise-api-client/models"
)

// NewAvatarCandidatePromoteParams creates a new AvatarCandidatePromoteParams object
// with the default values initialized.
func NewAvatarCandidatePromoteParams() *AvatarCandidatePromoteParams {
	var ()
	return &AvatarCandidatePromoteParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewAvatarCandidatePromoteParamsWithTimeout creates a new AvatarCandidatePromoteParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewAvatarCandidatePromoteParamsWithTimeout(timeout time.Duration) *AvatarCandidatePromoteParams {
	var ()
	return &AvatarCandidatePromoteParams{

		timeout: timeout,
	}
}

// NewAvatarCandidatePromoteParamsWithContext creates a new AvatarCandidatePromoteParams object
// with the default values initialized, and the ability to set a context for a request
func NewAvatarCandidatePromoteParamsWithContext(ctx context.Context) *AvatarCandidatePromoteParams {
	var ()
	return &AvatarCandidatePromoteParams{

		Context: ctx,
	}
}

// NewAvatarCandidatePromoteParamsWithHTTPClient creates a new AvatarCandidatePromoteParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewAvatarCandidatePromoteParamsWithHTTPClient(client *http.Client) *AvatarCandidatePromoteParams {
	var ()
	return &AvatarCandidatePromoteParams{
		HTTPClient: client,
	}
}

/*AvatarCandidatePromoteParams contains all the parameters to send to the API endpoint
for the avatar candidate promote operation typically these are written to a http.Request
*/
type AvatarCandidatePromoteParams struct {

	/*AppSlug
	  App slug

	*/
	AppSlug string
	/*AvatarPromoteParams
	  Avatar promote parameters

	*/
	AvatarPromoteParams *models.V0AvatarPromoteParams
	/*AvatarSlug
	  Avatar candidate slug

	*/
	AvatarSlug string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) WithTimeout(timeout time.Duration) *AvatarCandidatePromoteParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) WithContext(ctx context.Context) *AvatarCandidatePromoteParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) WithHTTPClient(client *http.Client) *AvatarCandidatePromoteParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppSlug adds the appSlug to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) WithAppSlug(appSlug string) *AvatarCandidatePromoteParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WithAvatarPromoteParams adds the avatarPromoteParams to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) WithAvatarPromoteParams(avatarPromoteParams *models.V0AvatarPromoteParams) *AvatarCandidatePromoteParams {
	o.SetAvatarPromoteParams(avatarPromoteParams)
	return o
}

// SetAvatarPromoteParams adds the avatarPromoteParams to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) SetAvatarPromoteParams(avatarPromoteParams *models.V0AvatarPromoteParams) {
	o.AvatarPromoteParams = avatarPromoteParams
}

// WithAvatarSlug adds the avatarSlug to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) WithAvatarSlug(avatarSlug string) *AvatarCandidatePromoteParams {
	o.SetAvatarSlug(avatarSlug)
	return o
}

// SetAvatarSlug adds the avatarSlug to the avatar candidate promote params
func (o *AvatarCandidatePromoteParams) SetAvatarSlug(avatarSlug string) {
	o.AvatarSlug = avatarSlug
}

// WriteToRequest writes these params to a swagger request
func (o *AvatarCandidatePromoteParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param app-slug
	if err := r.SetPathParam("app-slug", o.AppSlug); err != nil {
		return err
	}

	if o.AvatarPromoteParams != nil {
		if err := r.SetBodyParam(o.AvatarPromoteParams); err != nil {
			return err
		}
	}

	// path param avatar-slug
	if err := r.SetPathParam("avatar-slug", o.AvatarSlug); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
