

``mx.nd.random.pdf.uniform``
========================================================

Description
----------------------

Computes the value of the PDF of *sample* of
uniform distributions on the intervals given by *[low,high)*.

*low* and *high* must have the same shape, which must match the leftmost subshape
of *sample*.  That is, *sample* can have the same shape as *low* and *high*, in which
case the output contains one density per distribution, or *sample* can be a tensor
of tensors with that shape, in which case the output is a tensor of densities such that
the densities at index *i* in the output are given by the samples at index *i* in *sample*
parameterized by the values of *low* and *high* at index *i*.


**Example**::

	 
	 random_pdf_uniform(sample=[[1,2,3,4]], low=[0], high=[10]) = [0.1, 0.1, 0.1, 0.1]
	 
	 sample = [[[1, 2, 3],
	 [1, 2, 3]],
	 [[1, 2, 3],
	 [1, 2, 3]]]
	 low  = [[0, 0],
	 [0, 0]]
	 high = [[ 5, 10],
	 [15, 20]]
	 random_pdf_uniform(sample=sample, low=low, high=high) =
	 [[[0.2,        0.2,        0.2    ],
	 [0.1,        0.1,        0.1    ]],
	 [[0.06667,    0.06667,    0.06667],
	 [0.05,       0.05,       0.05   ]]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``sample``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Samples from the distributions.                            |
+----------------------------------------+------------------------------------------------------------+
| ``low``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Lower bounds of the distributions.                         |
+----------------------------------------+------------------------------------------------------------+
| ``is.log``                             | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If set, compute the density of the log-probability instead |
|                                        | of the                                                     |
|                                        | probability.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``high``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Upper bounds of the distributions.                         |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/pdf_op.cc#L298

