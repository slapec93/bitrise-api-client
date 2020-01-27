// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V0ProjectFileStorageResponseItemModel v0 project file storage response item model
// swagger:model v0.ProjectFileStorageResponseItemModel
type V0ProjectFileStorageResponseItemModel struct {

	// download url
	DownloadURL string `json:"download_url,omitempty"`

	// exposed meta datastore
	ExposedMetaDatastore string `json:"exposed_meta_datastore,omitempty"`

	// is expose
	IsExpose bool `json:"is_expose,omitempty"`

	// is protected
	IsProtected bool `json:"is_protected,omitempty"`

	// processed
	Processed bool `json:"processed,omitempty"`

	// slug
	Slug string `json:"slug,omitempty"`

	// upload file name
	UploadFileName string `json:"upload_file_name,omitempty"`

	// upload file size
	UploadFileSize int64 `json:"upload_file_size,omitempty"`

	// upload url
	UploadURL string `json:"upload_url,omitempty"`

	// user env key
	UserEnvKey string `json:"user_env_key,omitempty"`
}

// Validate validates this v0 project file storage response item model
func (m *V0ProjectFileStorageResponseItemModel) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0ProjectFileStorageResponseItemModel) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0ProjectFileStorageResponseItemModel) UnmarshalBinary(b []byte) error {
	var res V0ProjectFileStorageResponseItemModel
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
