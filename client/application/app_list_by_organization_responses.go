// Code generated by go-swagger; DO NOT EDIT.

package application

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/slapec93/bitrise-api-client/models"
)

// AppListByOrganizationReader is a Reader for the AppListByOrganization structure.
type AppListByOrganizationReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *AppListByOrganizationReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {

	case 200:
		result := NewAppListByOrganizationOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil

	case 400:
		result := NewAppListByOrganizationBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 401:
		result := NewAppListByOrganizationUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 404:
		result := NewAppListByOrganizationNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 500:
		result := NewAppListByOrganizationInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewAppListByOrganizationOK creates a AppListByOrganizationOK with default headers values
func NewAppListByOrganizationOK() *AppListByOrganizationOK {
	return &AppListByOrganizationOK{}
}

/*AppListByOrganizationOK handles this case with default header values.

OK
*/
type AppListByOrganizationOK struct {
	Payload *models.V0AppListResponseModel
}

func (o *AppListByOrganizationOK) Error() string {
	return fmt.Sprintf("[GET /organizations/{org-slug}/apps][%d] appListByOrganizationOK  %+v", 200, o.Payload)
}

func (o *AppListByOrganizationOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0AppListResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByOrganizationBadRequest creates a AppListByOrganizationBadRequest with default headers values
func NewAppListByOrganizationBadRequest() *AppListByOrganizationBadRequest {
	return &AppListByOrganizationBadRequest{}
}

/*AppListByOrganizationBadRequest handles this case with default header values.

Bad Request
*/
type AppListByOrganizationBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByOrganizationBadRequest) Error() string {
	return fmt.Sprintf("[GET /organizations/{org-slug}/apps][%d] appListByOrganizationBadRequest  %+v", 400, o.Payload)
}

func (o *AppListByOrganizationBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByOrganizationUnauthorized creates a AppListByOrganizationUnauthorized with default headers values
func NewAppListByOrganizationUnauthorized() *AppListByOrganizationUnauthorized {
	return &AppListByOrganizationUnauthorized{}
}

/*AppListByOrganizationUnauthorized handles this case with default header values.

Unauthorized
*/
type AppListByOrganizationUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByOrganizationUnauthorized) Error() string {
	return fmt.Sprintf("[GET /organizations/{org-slug}/apps][%d] appListByOrganizationUnauthorized  %+v", 401, o.Payload)
}

func (o *AppListByOrganizationUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByOrganizationNotFound creates a AppListByOrganizationNotFound with default headers values
func NewAppListByOrganizationNotFound() *AppListByOrganizationNotFound {
	return &AppListByOrganizationNotFound{}
}

/*AppListByOrganizationNotFound handles this case with default header values.

Not Found
*/
type AppListByOrganizationNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByOrganizationNotFound) Error() string {
	return fmt.Sprintf("[GET /organizations/{org-slug}/apps][%d] appListByOrganizationNotFound  %+v", 404, o.Payload)
}

func (o *AppListByOrganizationNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAppListByOrganizationInternalServerError creates a AppListByOrganizationInternalServerError with default headers values
func NewAppListByOrganizationInternalServerError() *AppListByOrganizationInternalServerError {
	return &AppListByOrganizationInternalServerError{}
}

/*AppListByOrganizationInternalServerError handles this case with default header values.

Internal Server Error
*/
type AppListByOrganizationInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AppListByOrganizationInternalServerError) Error() string {
	return fmt.Sprintf("[GET /organizations/{org-slug}/apps][%d] appListByOrganizationInternalServerError  %+v", 500, o.Payload)
}

func (o *AppListByOrganizationInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}