from django.db import models
from django.core.exceptions import ValidationError

class application(models.Model):
    ID = models.IntegerField(primary_key=True)
    Applicant_Name	= models.CharField(max_length=50)
    Gender	= models.CharField(max_length=20)
    District= models.CharField(max_length=50)
    State	= models.CharField(max_length=50)
    Pincode	= models.IntegerField()
    Ownership	= models.CharField(max_length=50)
    GovtID_Type	= models.CharField(max_length=50)
    ID_Number	= models.IntegerField()
    Category	= models.CharField(max_length=50)
    Load_Applied= models.IntegerField()
    Date_of_Application	= models.DateField()   
    Date_of_Approval	= models.DateField()
    Modified_Date	= models.DateField()
    Status	=   models.CharField(max_length=50)
    Reviewer_ID	=   models.IntegerField()
    Reviewer_Name	=   models.CharField(max_length=50)
    Reviewer_Comments=  models.CharField(max_length=50)

    Load_Applied = models.IntegerField()

    def clean(self):
        if self.Load_Applied > 200:
            raise ValidationError({'Load_Applied': 'Load applied should not exceed 200 KV'})

        if self.Status == 'Approved' and not self.Date_of_Approval:
            raise ValidationError({'Date_of_Approval': 'Date of Approval is required when Status is Approved'})

    def save(self, *args, **kwargs):
        self.full_clean()
        return super().save(*args, **kwargs)