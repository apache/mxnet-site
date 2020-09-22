

``mx.nd.random.pdf.poisson``
========================================================

Description
----------------------

Computes the value of the PDF of *sample* of
Poisson distributions with parameters *lam* (rate).

The shape of *lam* must match the leftmost subshape of *sample*.  That is, *sample*
can have the same shape as *lam*, in which case the output contains one density per
distribution, or *sample* can be a tensor of tensors with that shape, in which case
the output is a tensor of densities such that the densities at index *i* in the output
are given by the samples at index *i* in *sample* parameterized by the value of *lam*
at index *i*.


**Example**::

	 
	 random_pdf_poisson(sample=[[0,1,2,3]], lam=[1]) =
	 [[0.36787945, 0.36787945, 0.18393973, 0.06131324]]
	 
	 sample = [[0,1,2,3],
	 [0,1,2,3],
	 [0,1,2,3]]
	 
	 random_pdf_poisson(sample=sample, lam=[1,2,3]) =
	 [[0.36787945, 0.36787945, 0.18393973, 0.06131324],
	 [0.13533528, 0.27067056, 0.27067056, 0.18044704],
	 [0.04978707, 0.14936121, 0.22404182, 0.22404182]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``sample``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Samples from the distributions.                            |
+----------------------------------------+------------------------------------------------------------+
| ``lam``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Lambda (rate) parameters of the distributions.             |
+----------------------------------------+------------------------------------------------------------+
| ``is.log``                             | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If set, compute the density of the log-probability instead |
|                                        | of the                                                     |
|                                        | probability.                                               |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/pdf_op.cc#L307

